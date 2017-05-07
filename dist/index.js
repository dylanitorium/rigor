#!/usr/bin/env node
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_commander2.default.version('0.0.5').usage('[options] [directory]').option('-s, --single', 'Only serve index', false).option('-p, --port [port]', 'Specify port [8888]', '8888').option('-i, --index [index]', 'Specify index file [index.html]', 'index.html').parse(process.argv);

var app = (0, _express2.default)();

var directory = _commander2.default.args[0];
if (!directory) {
  console.error('Error: You need to specify a directory');
  process.exit(1);
}

var port = _commander2.default.port,
    index = _commander2.default.index,
    single = _commander2.default.single;


app.use(_express2.default.static(directory, {
  index: index
}));

if (single) {
  app.get('*', function (req, res) {
    res.sendFile(_path2.default.resolve(__dirname, directory, index));
  });
}

app.listen(port, '127.0.0.1', function () {
  console.log('Listening on: http://127.0.0.1:' + port);
});
