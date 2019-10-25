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