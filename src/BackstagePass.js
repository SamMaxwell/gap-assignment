const { base_next_quality } = require('./base_next_quality');

const BackstagePass = {
  next_quality: (item) => {
    base_next_quality({
      item,
      setZero: (sell_in) => sell_in < 0,
      isDegrading: false,
      sell_in_factor: (sell_in) => sell_in < 5 ? 3 : sell_in < 10 ? 2 : 1,
    });
  },
}

module.exports = { BackstagePass }
