const { get_category } = require('../gilded_rose');

const clone = (clonee) => JSON.parse(JSON.stringify(clonee));

describe('gilded_rose Conjured category', () => {
  const Standard = get_category('Standard');
  const Conjured = get_category('Conjured');

  it('degrades the quality of an item twice as fast as Standard', () => {
    const item = { sell_in: 5, quality: 10 }

    const standardItem = clone(item);

    let standardDaysToZero = 0;

    for(; standardItem.quality > 0; standardDaysToZero++) {
      Standard.next_quality(standardItem);
    }

    const conjuredItem = clone(item);

    let conjuredDaysToZero = 0;

    for(; conjuredItem.quality > 0; conjuredDaysToZero++) {
      Conjured.next_quality(conjuredItem);
    }

    const received = standardDaysToZero;
    const expected = conjuredDaysToZero * 2;
    expect(received).toEqual(expected);
  });
});
