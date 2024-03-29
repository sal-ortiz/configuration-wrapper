
const Path = require('path');
const File = require('fs');
const YAML = require('yaml');
const XML = require('fast-xml-parser');

const specPath = Path.join(__dirname);
const rootPath = Path.join(specPath, '..');
const supportPath = Path.join(specPath, 'support');

const Configuration = require(Path.join(rootPath, 'configuration.js'));

const xmlStub = Path.join(supportPath, 'input.xml');
const yamlStub = Path.join(supportPath, 'input.yml');
const jsonStub = Path.join(supportPath, 'input.json');


describe(Configuration.name, () => {

  describe('an instance of', () => {
    let instance;
    let result;

    describe('the toJSON() function.', () => {

      beforeEach(() => {
        instance = Configuration.fromFile(jsonStub);
        result = instance.toJSON();
      });

      it('returns a valid JSON string', () => {
        expect(result).toBeDefined();
        expect(result.constructor).toBe(String);

        let parsedRes = JSON.parse(result);
        let instanceObj = Object.assign({}, instance);

        expect(parsedRes).toEqual(instanceObj);
      });

    });

    describe('the toXML() function.', () => {

      beforeEach(() => {
        instance = Configuration.fromFile(xmlStub);

        result = instance.toXML();
      });

      it('returns a valid XML string', () => {
        expect(result).toBeDefined();
        expect(result.constructor).toBe(String);

        let XMLParser = new XML.XMLParser();

        let parsedRes = XMLParser.parse(result);
        let instanceObj = Object.assign({}, instance);

        expect(parsedRes).toEqual(instanceObj);
      });

    });

    describe('the toYAML() function.', () => {

      beforeEach(() => {
        instance = Configuration.fromFile(yamlStub);
        result = instance.toYAML();
      });

      it('returns a valid YAML string', () => {
        expect(result).toBeDefined();
        expect(result.constructor).toBe(String);

        let parsedRes = YAML.parse(result);
        let instanceObj = Object.assign({}, instance);

        expect(parsedRes).toEqual(instanceObj);
      });

    });

  });


  describe('the fromFile(...) static function', () => {
    let stub;
    let result;

    beforeEach(() => {
      result = Configuration.fromFile(stub);
    });

    describe('given JSON input', () => {
      stub = jsonStub;

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

    describe('given XML input', () => {
      stub = xmlStub;

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

    describe('given YAML input', () => {
      stub = yamlStub;

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

  });

  describe('the fromString(...) static function', () => {
    let stub;
    let result;

    beforeEach(() => {
      result = Configuration.fromString(stub);
    });

    describe('given JSON input', () => {
      stub = File.readFileSync(jsonStub).toString();

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

    describe('given XML input', () => {
      stub = File.readFileSync(xmlStub).toString();

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

    describe('given YAML input', () => {
      stub = File.readFileSync(yamlStub).toString();

      it('parses the given input object', () => {
        let obj = result.anObject;

        expect(obj.one).toEqual(1);
        expect(obj.two).toEqual(2);
        expect(obj.three).toEqual(3);
        expect(obj.four).toEqual(4);
      });

      it('parses the given input array', () => {
        let ary = result.anArray;

        expect(ary[0]).toEqual(1);
        expect(ary[1]).toEqual(2);
        expect(ary[2]).toEqual(3);
        expect(ary[3]).toEqual(4);
      });

    });

  });

});
