const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');

const AgedBrie = {
  next_quality: (item) => base_next_quality({ item, isDegrading: false }),
  next_sell_in: base_next_sell_in,
}

module.exports = { AgedBrie }
