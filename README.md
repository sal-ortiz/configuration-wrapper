# Configuration Wrapper
A simple wrapper to handle most of the boilerplate associated with handling configuration files.

## Installation:
```
npm install --save configuration-wrapper
```

## Initialization:
```
const Configuration = require('configuration-wrapper');

Configuration.fromFile('input.xml');  // load an XML file.
Configuration.fromFile('input.yml');  // load a YAML file.
Configuration.fromFile('input.json'); // load a JSON file.
```

## Other Tricks

### output
```
let cfg = Configuration.fromFile('input.json'); // load a JSON file.

cfg.toJSON();   // output as a JSON string.
cfg.toYAML();   // output as a YAML string.
cfg.toXML();    // output as a XML string.
```
or from a command line:
```
bin/to-json.js input.xml
bin/to-yaml.js input.json
bin/to-xml.js input.yml
```
