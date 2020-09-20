const { get_category } = require('../gilded_rose');

const clone = (clonee) => JSON.parse(JSON.stringify(clonee));

describe('gilded_rose Conjured category', () => {
  const Normal = get_category('Normal');
  const Conjured = get_category('Conjured');

  it('degrades the quality of an item twice as fast as Normal', () => {
    const item = { sell_in: 5, quality: 10 }

    const normalItem = clone(item);

    let normalDaysToZero = 0;

    for(; normalItem.quality > 0; normalDaysToZero++) {
      Normal.next_quality(normalItem);
    }

    const conjuredItem = clone(item);

    let conjuredDaysToZero = 0;

    for(; conjuredItem.quality > 0; conjuredDaysToZero++) {
      Conjured.next_quality(conjuredItem);
    }

    const received = normalDaysToZero;
    const expected = conjuredDaysToZero * 2;
    expect(received).toEqual(expected);
  });
});
