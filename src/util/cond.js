const cond = (conds) => (value) => {
  for(let i = 0; i < conds.length; i++) {
    const [test, result] = conds[i];
    if (test(value)) return result(value);
  }
  return undefined;
}

module.exports = { cond }
