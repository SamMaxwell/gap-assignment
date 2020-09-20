const { get_category } = require('../gilded_rose');

describe('gilded_rose Normal category', () => {
  const Normal = get_category('Normal');

  it('decreases the sell_in of an item each day', () => {
    const item = { sell_in: 10 }
    Normal.next_sell_in(item);
    const { sell_in: received } = item;
    const expected = 9;
    expect(received).toEqual(expected);
  })

  it('degrades the quality of an item by one when sell_in days is not negative', () => {
    const item = { quality: 10 }
    Normal.next_quality(item);
    const { quality: received } = item;
    const expected = 9;
    expect(received).toEqual(expected);
  });

  it('degrades the quality of an item by two when sell_in days is less than zero', () => {
    const item = { sell_in: -1, quality: 10 }
    Normal.next_quality(item);
    const { quality: received } = item;
    const expected = 8;
    expect(received).toEqual(expected);
  });

  it('does not degrade the quality of an item below zero', () => {
    const item = { sell_in: -1, quality: 1 }
    Normal.next_quality(item);
    const { quality: received } = item;
    const expected = 0;
    expect(received).toEqual(expected);
  });
});
