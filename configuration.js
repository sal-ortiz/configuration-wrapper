
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
    let builder = new XML.XMLBuilder();

    return builder.build(obj);
  }

  toYAML() {
    let obj = Object.assign({}, this);

    return YAML.stringify(obj);
  }

  static fromFile(filename) {
    let type = MIME.lookup(filename);
    let raw = File.readFileSync(filename);

    let content = raw.toString();

    return Configuration.fromString(content);
  }

  static fromString(str) {
    let parser;

    if (Helpers.isJSON(str)) {
      parser = Parsers['application/json'];
    } else if (Helpers.isXML(str)) {
      parser = Parsers['application/xml'];
    } else if (Helpers.isYAML(str)) {
      parser = Parsers['text/yaml'];
   } else {
      throw 'unrecognized data format.'
    }

    let content = parser.parse(str);

    return new Configuration(content);
  }

}


module.exports = Configuration;
