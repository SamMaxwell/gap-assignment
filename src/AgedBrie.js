const { base_next_quality } = require('./base_next_quality');

const AgedBrie = {
  next_quality: (item) => {
    base_next_quality({ item, isDegrading: false });
  },
}

module.exports = { AgedBrie }
