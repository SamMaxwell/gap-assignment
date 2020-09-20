const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');

const Standard = {
  next_quality: (item) => base_next_quality({ item }),
  next_sell_in: base_next_sell_in,
}

module.exports = { Standard }
