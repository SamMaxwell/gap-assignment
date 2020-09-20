const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');

module.exports = {
  name: 'Aged Brie',
  next_quality: base_next_quality({ isDegrading: false }),
  next_sell_in: base_next_sell_in,
}
