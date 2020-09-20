const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const update_quality = gilded_rose.__get__('update_quality');

describe('gilded_rose update_quality() characterization', () => {
  // update_quality() is stateful
  const received = gilded_rose.__get__('items');

  let conjuredAdjustmentAmount = 0;
  const adjustExpectedConjuredQuality = (quality) => Math.max(0, quality - ++conjuredAdjustmentAmount);

  const dailyExpecteds = [[
    {'name': '+5 Dexterity Vest', 'quality': 19, 'sell_in': 9},
    {'name': 'Aged Brie', 'quality': 1, 'sell_in': 1},
    {'name': 'Elixir of the Mongoose', 'quality': 6, 'sell_in': 4},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 21, 'sell_in': 14},
    {'name': 'Conjured Mana Cake', 'quality': adjustExpectedConjuredQuality(5), 'sell_in': 2}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 18, 'sell_in': 8},
    {'name': 'Aged Brie', 'quality': 2, 'sell_in': 0},
    {'name': 'Elixir of the Mongoose', 'quality': 5, 'sell_in': 3},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 22, 'sell_in': 13},
    {'name': 'Conjured Mana Cake', 'quality': adjustExpectedConjuredQuality(4), 'sell_in': 1}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 17, 'sell_in': 7},
    {'name': 'Aged Brie', 'quality': 4, 'sell_in': -1},
    {'name': 'Elixir of the Mongoose', 'quality': 4, 'sell_in': 2},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 23, 'sell_in': 12},
    {'name': 'Conjured Mana Cake', 'quality': adjustExpectedConjuredQuality(3), 'sell_in': 0}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 16, 'sell_in': 6},
    {'name': 'Aged Brie', 'quality': 6, 'sell_in': -2},
    {'name': 'Elixir of the Mongoose', 'quality': 3, 'sell_in': 1},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 24, 'sell_in': 11},
    {'name': 'Conjured Mana Cake', 'quality': adjustExpectedConjuredQuality(1), 'sell_in': -1}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 15, 'sell_in': 5},
    {'name': 'Aged Brie', 'quality': 8, 'sell_in': -3},
    {'name': 'Elixir of the Mongoose', 'quality': 2, 'sell_in': 0},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 25, 'sell_in': 10},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -2}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 14, 'sell_in': 4},
    {'name': 'Aged Brie', 'quality': 10, 'sell_in': -4},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -1},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 27, 'sell_in': 9},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -3}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 13, 'sell_in': 3},
    {'name': 'Aged Brie', 'quality': 12, 'sell_in': -5},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -2},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 29, 'sell_in': 8},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -4}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 12, 'sell_in': 2},
    {'name': 'Aged Brie', 'quality': 14, 'sell_in': -6},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -3},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 31, 'sell_in': 7},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -5}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 11, 'sell_in': 1},
    {'name': 'Aged Brie', 'quality': 16, 'sell_in': -7},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -4},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 33, 'sell_in': 6},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -6}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 10, 'sell_in': 0},
    {'name': 'Aged Brie', 'quality': 18, 'sell_in': -8},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -5},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 35, 'sell_in': 5},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -7}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 8, 'sell_in': -1},
    {'name': 'Aged Brie', 'quality': 20, 'sell_in': -9},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -6},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 38, 'sell_in': 4},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -8}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 6, 'sell_in': -2},
    {'name': 'Aged Brie', 'quality': 22, 'sell_in': -10},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -7},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 41, 'sell_in': 3},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -9}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 4, 'sell_in': -3},
    {'name': 'Aged Brie', 'quality': 24, 'sell_in': -11},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -8},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 44, 'sell_in': 2},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -10}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 2, 'sell_in': -4},
    {'name': 'Aged Brie', 'quality': 26, 'sell_in': -12},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -9},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 47, 'sell_in': 1},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -11}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -5},
    {'name': 'Aged Brie', 'quality': 28, 'sell_in': -13},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -10},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 50, 'sell_in': 0},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -12}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -6},
    {'name': 'Aged Brie', 'quality': 30, 'sell_in': -14},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -11},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -1},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -13}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -7},
    {'name': 'Aged Brie', 'quality': 32, 'sell_in': -15},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -12},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -2},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -14}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -8},
    {'name': 'Aged Brie', 'quality': 34, 'sell_in': -16},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -13},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -3},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -15}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -9},
    {'name': 'Aged Brie', 'quality': 36, 'sell_in': -17},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -14},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -4},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -16}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -10},
    {'name': 'Aged Brie', 'quality': 38, 'sell_in': -18},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -15},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -5},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -17}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -11},
    {'name': 'Aged Brie', 'quality': 40, 'sell_in': -19},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -16},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -6},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -18}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -12},
    {'name': 'Aged Brie', 'quality': 42, 'sell_in': -20},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -17},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -7},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -19}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -13},
    {'name': 'Aged Brie', 'quality': 44, 'sell_in': -21},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -18},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -8},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -20}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -14},
    {'name': 'Aged Brie', 'quality': 46, 'sell_in': -22},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -19},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -9},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -21}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -15},
    {'name': 'Aged Brie', 'quality': 48, 'sell_in': -23},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -20},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -10},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -22}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -16},
    {'name': 'Aged Brie', 'quality': 50, 'sell_in': -24},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -21},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -11},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -23}
  ], [
    {'name': '+5 Dexterity Vest', 'quality': 0, 'sell_in': -17},
    {'name': 'Aged Brie', 'quality': 50, 'sell_in': -25},
    {'name': 'Elixir of the Mongoose', 'quality': 0, 'sell_in': -22},
    {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
    {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 0, 'sell_in': -12},
    {'name': 'Conjured Mana Cake', 'quality': 0, 'sell_in': -24}
  ]];

  dailyExpecteds.forEach((expected, day) => {
    it(`items should be as expected after day ${day + 1}`, () => {
      update_quality();
      expect(received).toEqual(expected);
    });
  });
});
