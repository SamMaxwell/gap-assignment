const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');

module.exports = {
  name: 'Backstage Pass',
  next_quality: (item) => base_next_quality({
    item,
    setZero: (sell_in) => sell_in < 0,
    isDegrading: false,
    sell_in_factor: (sell_in) => sell_in < 5 ? 3 : sell_in < 10 ? 2 : 1,
  }),
  next_sell_in: base_next_sell_in,
}
