const { next_quality } = require('../gilded_rose');

describe('gilded_rose next_quality()', () => {
  it('is a function', () => expect(typeof next_quality).toEqual('function'));

  it('that degrades the quality of an item', () => {
    const given = {
      item: { quality: 10 },
    }
    const expected = 9;
    next_quality(given);
    const received = given.item.quality;
    expect(received).toEqual(expected);
  });
});
