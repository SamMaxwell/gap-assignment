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

const itemCategories = {
  'Standard': {
    next_sell_in: (item) => item.sell_in -= 1,
  },
  'Sulfuras': {
    next_sell_in: () => {},
  }
}

const getCategory = (categoryName) => ({
  ...itemCategories.Standard,
  ...(itemCategories[categoryName] || {})
});

const categorize = () => items.map((item, i) => ({ categoryName: itemCategoryNames[i], item }));

const next_sell_in = ({ categoryName, item }) => {
  const category = getCategory(categoryName);
  category.next_sell_in(item);
}

const next_quality = ({ categoryName, item }) => {
  if (categoryName === 'Sulfuras') return;
  const { sell_in } = item;
  if (categoryName === 'Backstage Pass' && sell_in < 0) {
    item.quality = 0;
    return;
  }
  const isDegrading = ['Aged Brie', 'Backstage Pass'].indexOf(categoryName) == -1 ? true : false;
  const sell_in_factor = categoryName != 'Backstage Pass' ? (sell_in < 0 ? 2 : 1)
    : (sell_in < 5 ? 3 : sell_in < 10 ? 2 : 1);
  const new_quality = item.quality + (isDegrading ? -1: 1) * sell_in_factor;
  item.quality = Math.min(50, Math.max(0, new_quality));
}

function update_quality() {
  const categorizedItems = categorize();

  categorizedItems.forEach((categorizedItem) => {
    const { item } = categorizedItem;
    next_sell_in(categorizedItem);
    next_quality(categorizedItem);
  });
}

module.exports = {
  categorize,
  next_quality,
  next_sell_in,
}