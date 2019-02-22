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
