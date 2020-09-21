const { base_next_quality } = require('./bases/base_next_quality');
const { base_next_sell_in } = require('./bases/base_next_sell_in');
const { cond } = require('../util/cond'); // could be replaced by lodash
const { constant } = require('../util/constant'); // could be replaced by lodash
const { stubTrue } = require('../util/stubTrue'); // could be replaced by lodash

const sell_in_factor = cond([
  [(sell_in) => sell_in < 5, constant(3)], // varies from documented requirements ("5 days or less"), but satisfies characterization
  [(sell_in) => sell_in < 10, constant(2)], // varies from documented requirements ("10 days or less"), but satisfies characterization
  [stubTrue, constant(1)]
]);

module.exports = {
  name: 'Backstage Pass',
  next_quality: base_next_quality({
    setZero: (sell_in) => sell_in < 0,
    isDegrading: false,
    sell_in_factor,
  }),
  next_sell_in: base_next_sell_in,
}
