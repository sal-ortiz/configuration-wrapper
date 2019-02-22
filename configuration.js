
const File = require('fs');
const Path = require('path');
const MIME = require('mime-types');

const YAML = require('yaml');
const XML = require('fast-xml-parser');

const libPath = Path.join(__dirname, 'lib');
const Parsers = require(Path.join(libPath, 'parsers.js'));


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

    return new this(content);
  }

}


module.exports = Configuration;
