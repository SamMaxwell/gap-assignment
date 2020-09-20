const { base_sell_in_factor } = require('./base_sell_in_factor');

const base_next_quality = ({
  item,
  isDegrading = true,
  setZero = (_) => false,
  sell_in_factor = base_sell_in_factor,
}) => {
  const { sell_in } = item;
  const new_quality = setZero(sell_in) ? 0
    : item.quality + (isDegrading ? -1 : 1) * sell_in_factor(sell_in);
  item.quality = Math.min(50, Math.max(0, new_quality));
}

module.exports = { base_next_quality }
