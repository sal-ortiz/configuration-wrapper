

class Helpers {

  static isYAML(str) {
    let match = str.match(/[\w\s\:\[\]^\{^\}^\<^\>\,\-]+/gi);

    return !!match && match.toString() === str;
  }

  static isJSON(str) {
    let match = str.match(/^\{[\{\}\[\]\"\'\w\s\:\,]+[\}\s]$/gi);

    return !!match && match.toString() === str;
  }

  static isXML(str) {
    let match = str.match(/^[\<\>\w\s\/\=\'\"]+$/gi);

    return !!match && match.toString() === str;
  }

};


module.exports = Helpers;
