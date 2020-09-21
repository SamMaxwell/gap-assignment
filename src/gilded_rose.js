const { join } = require('path');
const { loader } = require('./util/loader');

const itemCategories = loader(join(__dirname, './categories'));

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

const itemCategoryNames = ['Normal', 'Aged Brie', 'Normal', 'Sulfuras', 'Backstage Pass', 'Conjured'];

const categorize = () => items.map((item, i) => ({ categoryName: itemCategoryNames[i], item }));

function update_quality() {
  const categorizedItems = categorize();

  categorizedItems.forEach(({ categoryName, item }) => {
    const category = itemCategories[categoryName];
    category.next_sell_in(item);
    category.next_quality(item);
  });
}
