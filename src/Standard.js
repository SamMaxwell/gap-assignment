const { base_next_quality } = require('./base_next_quality');

const Standard = {
  next_quality: (item) => {
    base_next_quality({ item });
  },
  next_sell_in: (item) => item.sell_in -= 1,
}

module.exports = { Standard }
