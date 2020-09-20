const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const update_quality = gilded_rose.__get__('update_quality');

describe('gilded_rose update_quality() characterization', () => {
  it('items should be as expected after 1st call', () => {
    update_quality();
    const received = gilded_rose.__get__('items');
    const expected = [
      {'name': '+5 Dexterity Vest', 'quality': 19, 'sell_in': 9},
      {'name': 'Aged Brie', 'quality': 1, 'sell_in': 1},
      {'name': 'Elixir of the Mongoose', 'quality': 6, 'sell_in': 4},
      {'name': 'Sulfuras, Hand of Ragnaros', 'quality': 80, 'sell_in': 0},
      {'name': 'Backstage passes to a TAFKAL80ETC concert', 'quality': 21, 'sell_in': 14},
      {'name': 'Conjured Mana Cake', 'quality': 5, 'sell_in': 2}
    ];
    expect(received).toEqual(expected);
  });

  it('items should be as expected after 2nd call', () => {
    update_quality();
    const received = gilded_rose.__get__('items');
    const expected = null;
    expect(received).toEqual(expected);
  });
});
