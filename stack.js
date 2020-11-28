const Utility = require('./Utility');
let readlineSync = require('readline-sync');
let element = readlineSync.question("Enter Integer: ");
Utility.push(element);
