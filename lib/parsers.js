
const YAML = require('yaml');
const XML = require('fast-xml-parser');

const Parsers = {
  'text/yaml': YAML,
  'application/json': JSON,
  'application/xml': XML,

  isJSON: function(str) {
    let match = str.match(/^\{[\{\}\[\]\"\'\w\s\:\,]+[\}\s]$/gi);

    return !!match && match.toString() === str;
  },

  isYAML: function(str) {
    let match = str.match(/[\w\s\:\[\]^\{^\}^\<^\>\,\-]+/gi);

    return !!match && match.toString() === str;
  },

  isXML: function(str) {
    let match = str.match(/^[\<\>\w\s\/\=\'\"]+$/gi);

    return !!match && match.toString() === str;
  },

};


module.exports = Parsers;
