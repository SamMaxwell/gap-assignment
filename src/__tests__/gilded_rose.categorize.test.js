const { categorize } = require('../gilded_rose');

describe('gilded_rose categorize()', () => {
  it('is a function', () => expect(typeof categorize).toEqual('function'));

  it('that creates an array of categorized items', () => {
    const received = categorize();
    const expected = null;
    expect(received).toEqual(expected);
  });
});
