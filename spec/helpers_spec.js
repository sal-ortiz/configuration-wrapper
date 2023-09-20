
const Path = require('path');
const File = require('fs');

const specPath = Path.join(__dirname);
const rootPath = Path.join(specPath, '..');
const libPath = Path.join(rootPath, 'lib');
const supportPath = Path.join(specPath, 'support');

const Helpers = require(Path.join(libPath, 'helpers.js'));

const xmlStub = Path.join(supportPath, 'input.xml');
const yamlStub = Path.join(supportPath, 'input.yml');
const jsonStub = Path.join(supportPath, 'input.json');


describe(Helpers.name, () => {
  let rawJSON
  let rawYAML
  let rawXML;

  beforeEach(() => {
    rawJSON = File.readFileSync(jsonStub);
    rawYAML = File.readFileSync(yamlStub);
    rawXML = File.readFileSync(xmlStub);
  });

  describe('the isJSON() function.', () => {

    describe('given JSON data', () => {

      it('returns true', () => {
        let res = Helpers.isJSON(rawJSON.toString());

        expect(res).toBeTruthy();
      });

    });

  });

  describe('the isYAML() function.', () => {

    describe('given YAML data', () => {

      it('returns true', () => {
        let res = Helpers.isYAML(rawYAML.toString());

        expect(res).toBeTruthy();
      });

    });

  });

  describe('the isXML() function.', () => {

    describe('given XML data', () => {

      it('returns true', () => {
        let res = Helpers.isXML(rawXML.toString());

        expect(res).toBeTruthy();
      });

    });

  });

});
