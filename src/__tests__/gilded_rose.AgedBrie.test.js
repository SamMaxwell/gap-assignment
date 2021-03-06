const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const itemCategories = gilded_rose.__get__('itemCategories');

describe('gilded_rose Aged Brie category', () => {
  const AgedBrie = itemCategories['Aged Brie'];

  it('enhances the quality of an item by one when its sell_in is not negative', () => {
    const item = { quality: 1 }
    AgedBrie.next_quality(item);
    const { quality: received } = item;
    const expected = 2;
    expect(received).toEqual(expected);
  });

  it('enhances the quality of an item by two when its sell_in is negative', () => {
    const item = { sell_in: -2, quality: 1 }
    AgedBrie.next_quality(item);
    const { quality: received } = item;
    const expected = 3;
    expect(received).toEqual(expected);
  });

  it('does not enhance the quality of an item above fifty', () => {
    const item = { sell_in: -2, quality: 49 }
    AgedBrie.next_quality(item);
    const { quality: received } = item;
    const expected = 50;
    expect(received).toEqual(expected);
  });
});
