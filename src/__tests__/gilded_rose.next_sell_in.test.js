const { next_sell_in } = require('../gilded_rose');

describe('gilded_rose next_sell_in()', () => {
  it('is a function', () => expect(typeof next_sell_in).toEqual('function'));

  it('that decrements the sell_in of categorized item', () => {
    const given = {
      categoryName: 'Standard',
      item: { sell_in: 1 },
    }
    const expected = {
      categoryName: 'Standard',
      item: { sell_in: 0 },
    }
    const received = next_sell_in(given);
    expect(received).toEqual(expected);
  });
});
