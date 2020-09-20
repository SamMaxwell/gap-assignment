const { next_quality } = require('../gilded_rose');

describe('gilded_rose next_quality()', () => {
  it('is a function', () => expect(typeof next_quality).toEqual('function'));

  it('degrades the quality of an item', () => {
    const given = {
      item: { quality: 10 },
    }
    const expected = 9;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('degrades quality twice as fast when the sell_in days is less than zero', () => {
    const given = {
      item: { sell_in: -1, quality: 10 },
    }
    const expected = 8;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('does not degrade quality below zero', () => {
    const given = {
      item: { sell_in: -1, quality: 1 },
    }
    const expected = 0;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('increases Aged Brie quality the older it gets', () => {
    const given = {
      categoryName: 'Aged Brie',
      item: { quality: 1 },
    }
    const expected = 2;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('never sets the quality of an item more than 50', () => {
    const given = {
      categoryName: 'Aged Brie',
      item: { sell_in: -5, quality: 49 },
    }
    const expected = 50;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('does not decrease Sulfuras quality', () => {
    const given = {
      categoryName: 'Sulfuras',
      item: { quality: 1 },
    }
    const expected = 1;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });

  it('increases Backstage Pass quality the older it gets', () => {
    const given = {
      categoryName: 'Backstage Pass',
      item: { quality: 1 },
    }
    const expected = 2;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });
});
