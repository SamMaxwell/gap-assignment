const { get_category } = require('../gilded_rose');

describe('gilded_rose Backstage Pass category', () => {
  const BackstagePass = get_category('Backstage Pass');

  it('enhances the quality of an item by one when its sell_in is ten or more', () => {
    const item = { sell_in: 10, quality: 1 }
    BackstagePass.next_quality(item);
    const { quality: received } = item;
    const expected = 2;
    expect(received).toEqual(expected);
  });

  it('enhances the quality of an item by two when its sell_in is between five and nine', () => {
    const item = { sell_in: 9, quality: 1 }
    BackstagePass.next_quality(item);
    const { quality: received } = item;
    const expected = 3;
    expect(received).toEqual(expected);
  });

  it('enhances the quality of an item by three when its sell_in is between zero and four', () => {
    const item = { sell_in: 4, quality: 1 }
    BackstagePass.next_quality(item);
    const { quality: received } = item;
    const expected = 4;
    expect(received).toEqual(expected);
  });

  it('drops the quality of an item to zero when its sell_in is negative', () => {
    const item = { sell_in: -1, quality: 100 }
    BackstagePass.next_quality(item);
    const { quality: received } = item;
    const expected = 0;
    expect(received).toEqual(expected);
  });

  it('does not enhance the quality of an item above fifty', () => {
    const item = { sell_in: 0, quality: 49 }
    BackstagePass.next_quality(item);
    const { quality: received } = item;
    const expected = 50;
    expect(received).toEqual(expected);
  });
});
