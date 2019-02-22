#!/usr/bin/env node

const Path = require('path');
const Configuration = require(Path.join(__dirname, '..', 'configuration.js'));

let input = process.argv[2];
let cfg = Configuration.fromFile(input);

process.stdout.write(cfg.toXML());
