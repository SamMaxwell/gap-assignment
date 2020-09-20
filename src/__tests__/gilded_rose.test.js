const rewire = require('rewire');
const gilded_rose = rewire('../gilded_rose');
const update_quality = gilded_rose.__get__('update_quality');

describe('gilded_rose update_quality() characterization', () => {
  it('after 1st call items should be as expected', () => {
    update_quality();
    const received = gilded_rose.__get__('items');
    const expected = null;
    expect(received).toEqual(null);
  })
});
