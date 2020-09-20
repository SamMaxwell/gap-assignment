const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');
const { base_sell_in_factor } = require('./bases/base_sell_in_factor');

module.exports = {
  name: 'Conjured',
  next_quality: base_next_quality({
    sell_in_factor: (sell_in) => base_sell_in_factor(sell_in) * 2
  }),
  next_sell_in: base_next_sell_in,
}
