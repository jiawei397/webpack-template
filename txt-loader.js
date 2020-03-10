const { getOptions } = require('loader-utils');

module.exports = function loader(source) {
  const options = getOptions(this);

  source = source.replace(/\[name\]/g, options.name);
  source = source.replace(/\[version\]/g, options.version);

  return `export default ${ JSON.stringify(source) }`;
};
