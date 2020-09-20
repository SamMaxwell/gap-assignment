const { base_sell_in_factor } = require('./bases/base_sell_in_factor');

const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');

module.exports = {
  name: 'Conjured',
  next_quality: (item) => base_next_quality({
    item,
    sell_in_factor: (sell_in) => base_sell_in_factor(sell_in) * 2
  }),
  next_sell_in: base_next_sell_in,
}
