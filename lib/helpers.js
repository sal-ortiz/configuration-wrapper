
class Helpers {

  static isYAML(str) {
    let match = str.match(/[-\"\'#]*[\w_]+\:{1}.*[\n]/gi);

    return !!match && match.toString();
  }

  static isJSON(str) {
    let match = str.match(/\{\n*\s*\".*\":\s+(\d*|\".*\"|\[.*\]:\{.*\}$),/gmi);

    return !!match && match.toString();
  }

  static isXML(str) {
    let match = str.match(/\<\w+\>.*\<\/\w+\>/gmi);

    return !!match && match.toString();
  }

};


module.exports = Helpers;
