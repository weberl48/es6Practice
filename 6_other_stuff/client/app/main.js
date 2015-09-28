'use strict';

var utils = require('./utils');
var iso = require('../../portable');

const MAX_HEIGHT = 450;
const MIN_HEIGHT = 200;

console.log('Client side code started');

function isInRange(n) {
    return n <= MAX_HEIGHT && n >= MIN_HEIGHT;
}

//MAX_HEIGHT = 250;

console.log('is 300 in range', isInRange(300));
console.log('is 100 in range', isInRange(100));


for (let i = 0; i < 10; i++) {
    console.log(i);
}
//console.log('outside', i);

function doStuff(person) {
    var {name, age, job} = person;
    console.log(name + '(' + age + ') works as a ' + job);
}

doStuff({
    name: 'Jason',
    job: 'Developer',
    age: 31
});

/*
function callback(resonse) {
    var [status, body] = response;
    ... etc
}
 */


var arr = [{name: 'Jane'}, {name: 'Jason'}, {name: 'Mike'}];


//var strArr = arr.map(_.property('name'));
var strArr = arr.map((x) => x.name);
console.log(strArr);


/* Maintaining lexical scope

SomeClass.prototype.someMethod = function() {
    this.points.forEach((point) => {
        this.x++;
        this.y++;
    });
}

*/















