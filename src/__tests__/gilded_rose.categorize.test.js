const { categorize } = require('../gilded_rose');

describe('gilded_rose categorize()', () => {
  it('is a function', () => expect(typeof categorize).toEqual('function'));

  it('that creates an array of categorized items', () => {
    const received = categorize();
    const expected = [
      {'categoryName': 'Standard', 'item': {'name': '+5 Dexterity Vest', 'quality': 20, 'sell_in': 10}},
      {'categoryName': 'Aged Brie', 'item': {'name': 'Aged Brie', 'quality': 0, 'sell_in': 2}},
      {'categoryName': 'Standard', 'item': {'name': 'Elixir of the Mongoose', 'quality': 7, 'sell_in': 5}},
      {'categoryName': 'Sulfuras', 'item': {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0}},
      {'categoryName': 'Backstage Pass', 'item': {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 20, 'sell_in': 15}},
      {'categoryName': 'Standard', 'item': {'name': 'Conjured Mana Cake', 'quality': 6, 'sell_in': 3}}
    ];
    expect(received).toEqual(expected);
  });
});
