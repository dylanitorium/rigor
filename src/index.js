#!/usr/bin/env node

import express from 'express';
import path from 'path';
import commander from 'commander';

commander
  .version('0.1.1')
  .usage('[options] [directory]')
  .option('-s, --single', 'Only serve index', false)
  .option('-p, --port [port]', 'Specify port [8888]', '8888')
  .option('-i, --index [index]', 'Specify index file [index.html]', 'index.html')
  .parse(process.argv);

const app = express();

const directory = commander.args[0];
if (!directory) {
  console.error('Error: You need to specify a directory');
  process.exit(1);
}

const {
  port,
  index,
  single,
} = commander;

app.use(express.static(directory, {
  index,
}));

if (single) {
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, directory, index));
  });
}

app.listen(port, '127.0.0.1', () => {
  console.log(`Listening on: http://127.0.0.1:${port}`);
});
