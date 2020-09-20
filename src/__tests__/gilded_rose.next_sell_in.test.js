const { get_category } = require('../gilded_rose');

describe('gilded_rose next_sell_in()', () => {
  it('decrements the sell_in of an item', () => {
    const category = get_category();
    const given = { sell_in: 1 }
    const expected = 0;
    category.next_sell_in(given);
    const received = given.sell_in;
    expect(received).toEqual(expected);
  });

  it('unless the item is Sulfuras', () => {
    const category = get_category('Sulfuras');
    const given = { sell_in: 1 }
    const expected = 1;
    category.next_sell_in(given);
    const received = given.sell_in;
    expect(received).toEqual(expected);
  })
});
