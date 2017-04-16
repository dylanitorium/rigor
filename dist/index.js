#!/usr/bin/env node
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.1').usage('[options] [directory]').option('-p, --port [port]', 'Specify port [8888]', '8888').option('-i, --index [index]', 'Specify index file [index.html]', 'index.html').parse(process.argv);

var app = (0, _express2.default)();

var directory = _commander2.default.args[0];
if (!directory) {
  console.error('Error: You need to specify a directory');
  process.exit(1);
}

var port = _commander2.default.port,
    index = _commander2.default.index;


app.use(_express2.default.static(directory, {
  index: index
}));

app.listen(port, '127.0.0.1', function () {
  console.log('Listening on: http://127.0.0.1:' + port);
});
