const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const itemCategories = gilded_rose.__get__('itemCategories');

describe('gilded_rose Sulfuras category', () => {
  const Sulfuras = itemCategories['Sulfuras'];

  it('does not decreases the sell_in of an item each day', () => {
    const item = { sell_in: 10 }
    Sulfuras.next_sell_in(item);
    const { sell_in: received } = item;
    const expected = 10;
    expect(received).toEqual(expected);
  })

  it('does not degrade or enhance the quality of an item', () => {
    const item = { quality: 10 }
    Sulfuras.next_quality(item);
    const { quality: received } = item;
    const expected = 10;
    expect(received).toEqual(expected);
  });

  it('does not prevent quality less than zero', () => {
    const item = { quality: -10 }
    Sulfuras.next_quality(item);
    const { quality: received } = item;
    const expected = -10;
    expect(received).toEqual(expected);
  });

  it('does not prevent quality greater than fifty', () => {
    const item = { quality: 80 }
    Sulfuras.next_quality(item);
    const { quality: received } = item;
    const expected = 80;
    expect(received).toEqual(expected);
  });
});
