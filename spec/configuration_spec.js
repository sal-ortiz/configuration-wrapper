
const Path = require('path');

const specPath = Path.join(__dirname);
const rootPath = Path.join(specPath, '..');
const supportPath = Path.join(specPath, 'support');

const Configuration = require(Path.join(rootPath, 'configuration.js'));


const xmlStub = Path.join(supportPath, 'input.xml');
const yamlStub = Path.join(supportPath, 'input.yml');
const jsonStub = Path.join(supportPath, 'input.json');


describe(Configuration.name, () => {

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

});
