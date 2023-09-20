
const YAML = require('yaml');
const XML = require('fast-xml-parser');

class Helpers {

  static isYAML(str) {
    // HACK!! gotta' find a better way to do this.

    try {
      YAML.parse(str);
    } catch(err) {
      return false;
    }

    try {
      // JSON parser can't do YAML.
      JSON.parse(err);

      return false;
    } catch(err) {
      return true;
    }

  }

  static isJSON(str) {
    // HACK!! gotta' find a better way to do this.

    try {
      JSON.parse(str);

      return true;
    } catch(err) {
      return false;
    }

  }

  static isXML(str) {
    // HACK!! gotta' find a better way to do this.

    try {
      // JSON parser can't do XML.
      JSON.parse(str);

      return false;
    } catch(err) {
      // intentionally left blank.
    }

    try {
      // YAML parser can't do XML.
      YAML.parse(str);

      return false;
    } catch(err) {
      // intentionally left blank.
    }

    try {
      XML.parse(str);

      return true;
    } catch(err) {
      return false;
    }

  }

};


module.exports = Helpers;
