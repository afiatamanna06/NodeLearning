function myFunction(name) {
    console.log('Hello ' + name);
}
myFunction('Afia');
console.log(module);
var logger = require('./logger');
console.log(logger);
logger.log('message');
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);
const os = require('os');
var totmem = os.totalmem();
var fmem = os.freemem();
console.log('Total Memory: ' + totmem);
console.log('Free Memory: ' + fmem);
console.log(`Total Memory: ${totmem}`);
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('messageLogged', function() {
    console.log('Listener called');
});
emitter.emit('messageLogged');