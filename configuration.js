
const File = require('fs');
const Path = require('path');
const MIME = require('mime-types');

const libPath = Path.join(__dirname, 'lib');
const Parsers = require(Path.join(libPath, 'parsers.js'));


class Configuration {

  constructor(input) {
    return input;
  }

  static fromFile(filename) {
    let type = MIME.lookup(filename);
    let parser = Parsers[type];

    let raw = File.readFileSync(filename);
    let content = parser.parse(raw.toString());

    return new this(content);
  }

}


module.exports = Configuration;
