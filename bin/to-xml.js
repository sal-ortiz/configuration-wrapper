#!/usr/bin/env node

const Path = require('path');
const Configuration = require(Path.join(__dirname, '..', 'configuration.js'));

let input = process.argv[2];
let cfg;

if (input) {
  // a filename argument was given.
  cfg = Configuration.fromFile(input);

} else {
  // no arguments given so read STDIN.
  cfg = Configuration.fromSTDIN();

}

process.stdout.write(cfg.toXML());
