'use strict';

var utils = require('./utils');
var iso = require('../../portable');
var Square = require('./Square');


console.log('Client side code started');

var s1 = new Square(5);
var s2 = new Square();

console.log(s1.area, s2.area);
s1.sayName();