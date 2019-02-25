
const Path = require('path');
const File = require('fs');

const specPath = Path.join(__dirname, '..');
const rootPath = Path.join(specPath, '..');
const supportPath = Path.join(specPath, 'support');

const xmlStub = Path.join(supportPath, 'input.xml');
const yamlStub = Path.join(supportPath, 'input.yml');
const jsonStub = Path.join(supportPath, 'input.json');

const Parsers = require(Path.join(rootPath, 'lib', 'parsers.js'));


describe(Parsers.name, () => {
  let content = {
    json: File.readFileSync(jsonStub).toString(),
    yaml: File.readFileSync(yamlStub).toString(),
    xml: File.readFileSync(xmlStub).toString(),
  };

  describe('the isJSON() static function', () => {

    it('returns true given valid JSON data', () => {
      let result = Parsers.isJSON(content.json);

      expect(result).toBe(true);
    });

    it('returns false given valid YAML data', () => {
      let result = Parsers.isJSON(content.yaml);

      expect(result).toBe(false);
    });

    it('returns false given valid XML data', () => {
      let result = Parsers.isJSON(content.xml);

      expect(result).toBe(false);
    });

  });

  describe('the isYAML() static function', () => {

    it('returns false given valid JSON data', () => {
      let result = Parsers.isYAML(content.json);

      expect(result).toBe(false);
    });

    it('returns true given valid YAML data', () => {
      let result = Parsers.isYAML(content.yaml);

      expect(result).toBe(true);
    });

    it('returns false given valid XML data', () => {
      let result = Parsers.isYAML(content.xml);

      expect(result).toBe(false);
    });

  });

  describe('the isXML() static function', () => {

    it('returns false given valid JSON data', () => {
      let result = Parsers.isXML(content.json);

      expect(result).toBe(false);
    });

    it('returns false given valid YAML data', () => {
      let result = Parsers.isXML(content.yaml);

      expect(result).toBe(false);
    });

    it('returns true given valid XML data', () => {
      let result = Parsers.isXML(content.xml);

      expect(result).toBe(true);
    });

  });

});
