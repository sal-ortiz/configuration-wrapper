
const YAML = require('yaml');
const XML = require('fast-xml-parser');

const Parsers = {
  'text/yaml': YAML,
  'application/json': JSON,
  'application/xml': new XML.XMLParser(),
};


module.exports = Parsers;
