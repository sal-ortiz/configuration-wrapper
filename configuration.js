
const File = require('fs');
const Path = require('path');
const MIME = require('mime-types');

const YAML = require('yaml');
const XML = require('fast-xml-parser');

const libPath = Path.join(__dirname, 'lib');
const Parsers = require(Path.join(libPath, 'parsers.js'));
const Helpers = require(Path.join(libPath, 'helpers.js'));


class Configuration extends Object {

  constructor(input) {
    super();

    Object.assign(this, input);
  }

  toJSON() {
    let obj = Object.assign({}, this);

    return JSON.stringify(obj);
  }

  toXML() {
    let obj = Object.assign({}, this);
    let parser = new XML.j2xParser();

    return parser.parse(obj);
  }

  toYAML() {
    let obj = Object.assign({}, this);

    return YAML.stringify(obj);
  }

  static fromFile(filename) {
    let type = MIME.lookup(filename);
    let raw = File.readFileSync(filename);

    let parser = Parsers[type];
    let content = parser.parse(raw.toString());

    return new Configuration(content);
  }

  static fromString(str) {
    let parser;

    if (Helpers.isJSON(str)) {
      parser = Parsers['application/json'];
    } else if (Helpers.isYAML(str)) {
      parser = Parsers['text/yaml'];
    } else if (Helpers.isXML(str)) {
      parser = Parsers['application/xml'];
    }

    let content = parser.parse(str);

    return new Configuration(content);
  }

}


module.exports = Configuration;
