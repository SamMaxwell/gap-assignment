const { next_sell_in } = require('../gilded_rose');

describe('gilded_rose next_sell_in()', () => {
  it('is a function', () => expect(typeof next_sell_in).toEqual('function'));

  it('that decrements the sell_in of a categorized item', () => {
    const given = {
      categoryName: 'Standard',
      item: { sell_in: 1 },
    }
    const expected = 0;
    next_sell_in(given);
    const received = given.item.sell_in;
    expect(received).toEqual(expected);
  });

  it('unless the item is Sulfuras', () => {
    const given = {
      categoryName: 'Sulfuras',
      item: { sell_in: 1 },
    }
    const expected = 1;
    next_sell_in(given);
    const received = given.item.sell_in;
    expect(received).toEqual(expected);
  })
});
