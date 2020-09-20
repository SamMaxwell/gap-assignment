const { get_category } = require('../gilded_rose');

describe('gilded_rose next_quality()', () => {
  it('degrades the quality of an item', () => {
    const category = get_category();
    const given = { quality: 10 }
    const expected = 9;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('degrades quality twice as fast when the sell_in days is less than zero', () => {
    const category = get_category();
    const given = { sell_in: -1, quality: 10 }
    const expected = 8;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('does not degrade quality below zero', () => {
    const category = get_category();
    const given = { sell_in: -1, quality: 1 }
    const expected = 0;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('increases Aged Brie quality the older it gets', () => {
    const category = get_category('Aged Brie');
    const given = { quality: 1 }
    const expected = 2;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('never sets the quality of an item more than 50', () => {
    const category = get_category('Aged Brie');
    const given = { sell_in: -5, quality: 49 }
    const expected = 50;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('does not decrease Sulfuras quality', () => {
    const category = get_category('Sulfuras');
    const given = { quality: 1 }
    const expected = 1;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('increases Backstage Pass quality the older it gets', () => {
    const category = get_category('Backstage Pass');
    const given = { quality: 1 }
    const expected = 2;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('increases Backstage Pass quality by one when ten or more days', () => {
    const category = get_category('Backstage Pass');
    const given = { sell_in: 10, quality: 1 }
    const expected = 2;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('increases Backstage Pass quality by two when between five and nine days', () => {
    const category = get_category('Backstage Pass');
    const given = { sell_in: 5, quality: 1 }
    const expected = 3;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('increases Backstage Pass quality by three when less than five days', () => {
    const category = get_category('Backstage Pass');
    const given = { sell_in: 4, quality: 1 }
    const expected = 4;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });

  it('sets Backstage Pass quality to zero after the concert', () => {
    const category = get_category('Backstage Pass');
    const given = { sell_in: -1, quality: 10 }
    const expected = 0;
    category.next_quality(given);
    const received = given.quality;
    expect(received).toEqual(expected);
  });
});
