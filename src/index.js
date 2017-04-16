
import forever from 'forever-monitor';
import commander from 'commander';

commander
  .version('0.0.3')
  .usage('[options] [directory]')
  .option('-p, --port [port]', 'Specify port [8888]', '8888')
  .option('-i, --index [index]', 'Specify index file [index.html]', 'index.html')
  .parse(process.argv);

const {
  port,
  index,
} = commander;

var child = new (forever.Monitor)('rigor.js', {
  command: 'sh',
  max: 3,
  // silent: true,
  args: ['', '']
});

child.on('exit', function () {
  console.log('your-filename.js has exited after 3 restarts');
});

child.start();
