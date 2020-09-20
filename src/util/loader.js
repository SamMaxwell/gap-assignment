const { join } = require('path');
const { readdirSync } = require('fs');

const loader = (path) => readdirSync(path, { withFileTypes: true })
  .filter(x => !x.isDirectory())
  .map(x => require(join(path, x.name)))
  .reduce((prev, { name, ...module }) => ({
    ...prev,
    [name]: module
  }), {});

module.exports = { loader }
