const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const update_quality = gilded_rose.__get__('update_quality');

describe('gilded_rose update_quality() characterization', () => {
  // update_quality() is stateful
  const received = gilded_rose.__get__('items');

  const expecteds = [[
    {'name': '+5 Dexterity Vest', 'quality': 19, 'sell_in': 9},
    {'name': 'Aged Brie', 'quality': 1, 'sell_in': 1},
    {'name': 'Elixir of the Mongoose', 'quality': 6, 'sell_in': 4},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 21, 'sell_in': 14},
    {'name': 'Conjured Mana Cake', 'quality': 5, 'sell_in': 2}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 18, 'sell_in': 8},
    {'name': 'Aged Brie', 'quality': 2, 'sell_in': 0},
    {'name': 'Elixir of the Mongoose', 'quality': 5, 'sell_in': 3},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 22, 'sell_in': 13},
    {'name': 'Conjured Mana Cake', 'quality': 4, 'sell_in': 1}
  ]];

  expecteds.forEach((expected, day) => {
    it(`items should be as expected after day ${day + 1}`, () => {
      update_quality();
      expect(received).toEqual(expected);
    });
  });
});
