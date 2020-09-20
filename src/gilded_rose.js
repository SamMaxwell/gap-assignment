const { base_next_quality } = require('./base_next_quality');
const { AgedBrie } = require('./AgedBrie');
const { BackstagePass } = require('./BackstagePass')

function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

const itemCategoryNames = ['Standard', 'Aged Brie', 'Standard', 'Sulfuras', 'Backstage Pass', 'Standard'];

const noop = () => {}

const itemCategories = {
  'Aged Brie': AgedBrie,
  'Backstage Pass': BackstagePass,
  'Standard': {
    next_quality: (item) => {
      base_next_quality({ item });
    },
    next_sell_in: (item) => item.sell_in -= 1,
  },
  'Sulfuras': {
    next_quality: noop,
    next_sell_in: noop,
  }
}

const get_category = (categoryName) => ({
  ...itemCategories.Standard,
  ...(itemCategories[categoryName] || {})
});

const categorize = () => items.map((item, i) => ({ categoryName: itemCategoryNames[i], item }));

function update_quality() {
  const categorizedItems = categorize();

  categorizedItems.forEach(({ categoryName, item }) => {
    const category = get_category(categoryName);
    category.next_sell_in(item);
    category.next_quality(item);
  });
}

module.exports = {
  categorize,
  get_category,
}