(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var iso = require('../../portable');

var MAX_HEIGHT = 450;
var MIN_HEIGHT = 200;

console.log('Client side code started');

function isInRange(n) {
    return n <= MAX_HEIGHT && n >= MIN_HEIGHT;
}

//MAX_HEIGHT = 250;

console.log('is 300 in range', isInRange(300));
console.log('is 100 in range', isInRange(100));

for (var i = 0; i < 10; i++) {
    console.log(i);
}
//console.log('outside', i);

function doStuff(person) {
    var name = person.name;
    var age = person.age;
    var job = person.job;

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

var arr = [{ name: 'Jane' }, { name: 'Jason' }, { name: 'Mike' }];

//var strArr = arr.map(_.property('name'));
var strArr = arr.map(function (x) {
    return x.name;
});
console.log(strArr);

/* Maintaining lexical scope

SomeClass.prototype.someMethod = function() {
    this.points.forEach((point) => {
        this.x++;
        this.y++;
    });
}

*/

},{"../../portable":3,"./utils":2}],2:[function(require,module,exports){
'use strict';

module.exports = {
    count: count
};

function count() {
    var count = 0;
    setInterval(function () {
        return console.log(count++);
    }, 400);
}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
    validateId: validateId
};

var ID_PREFIX = 'USER_';
function validateId(id) {
    return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXNyYy81X290aGVyX3N0dWZmL2NsaWVudC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9qYXNvbmlhbmdyZWVuL3BlcnNvbmFsL3R1dHMvYmFiZWwvYmFiZWwtc3JjLzVfb3RoZXJfc3R1ZmYvY2xpZW50L2FwcC91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy9qYXNvbmlhbmdyZWVuL3BlcnNvbmFsL3R1dHMvYmFiZWwvYmFiZWwtc3JjLzVfb3RoZXJfc3R1ZmYvcG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVwQyxJQUFNLFVBQVUsR0FBRyxHQUFHLENBQUM7QUFDdkIsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDOztBQUV2QixPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXhDLFNBQVMsU0FBUyxDQUFDLENBQUMsRUFBRTtBQUNsQixXQUFPLENBQUMsSUFBSSxVQUFVLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQztDQUM3Qzs7OztBQUlELE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFHL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QixXQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ2xCOzs7QUFHRCxTQUFTLE9BQU8sQ0FBQyxNQUFNLEVBQUU7UUFDaEIsSUFBSSxHQUFjLE1BQU0sQ0FBeEIsSUFBSTtRQUFFLEdBQUcsR0FBUyxNQUFNLENBQWxCLEdBQUc7UUFBRSxHQUFHLEdBQUksTUFBTSxDQUFiLEdBQUc7O0FBQ25CLFdBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQ3pEOztBQUVELE9BQU8sQ0FBQztBQUNKLFFBQUksRUFBRSxPQUFPO0FBQ2IsT0FBRyxFQUFFLFdBQVc7QUFDaEIsT0FBRyxFQUFFLEVBQUU7Q0FDVixDQUFDLENBQUM7Ozs7Ozs7OztBQVVILElBQUksR0FBRyxHQUFHLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQzs7O0FBSTVELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFDO1dBQUssQ0FBQyxDQUFDLElBQUk7Q0FBQSxDQUFDLENBQUM7QUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUNqRHBCLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsU0FBSyxFQUFMLEtBQUs7Q0FDUixDQUFDOztBQUVGLFNBQVMsS0FBSyxHQUFHO0FBQ2IsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsZUFBVyxDQUFDO2VBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDaEQ7OztBQ1RELFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsY0FBVSxFQUFWLFVBQVU7Q0FDYixDQUFDOztBQUVGLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixTQUFTLFVBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDcEIsV0FBTyxPQUFPLEVBQUUsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDL0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgaXNvID0gcmVxdWlyZSgnLi4vLi4vcG9ydGFibGUnKTtcblxuY29uc3QgTUFYX0hFSUdIVCA9IDQ1MDtcbmNvbnN0IE1JTl9IRUlHSFQgPSAyMDA7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcblxuZnVuY3Rpb24gaXNJblJhbmdlKG4pIHtcbiAgICByZXR1cm4gbiA8PSBNQVhfSEVJR0hUICYmIG4gPj0gTUlOX0hFSUdIVDtcbn1cblxuLy9NQVhfSEVJR0hUID0gMjUwO1xuXG5jb25zb2xlLmxvZygnaXMgMzAwIGluIHJhbmdlJywgaXNJblJhbmdlKDMwMCkpO1xuY29uc29sZS5sb2coJ2lzIDEwMCBpbiByYW5nZScsIGlzSW5SYW5nZSgxMDApKTtcblxuXG5mb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICBjb25zb2xlLmxvZyhpKTtcbn1cbi8vY29uc29sZS5sb2coJ291dHNpZGUnLCBpKTtcblxuZnVuY3Rpb24gZG9TdHVmZihwZXJzb24pIHtcbiAgICB2YXIge25hbWUsIGFnZSwgam9ifSA9IHBlcnNvbjtcbiAgICBjb25zb2xlLmxvZyhuYW1lICsgJygnICsgYWdlICsgJykgd29ya3MgYXMgYSAnICsgam9iKTtcbn1cblxuZG9TdHVmZih7XG4gICAgbmFtZTogJ0phc29uJyxcbiAgICBqb2I6ICdEZXZlbG9wZXInLFxuICAgIGFnZTogMzFcbn0pO1xuXG4vKlxuZnVuY3Rpb24gY2FsbGJhY2socmVzb25zZSkge1xuICAgIHZhciBbc3RhdHVzLCBib2R5XSA9IHJlc3BvbnNlO1xuICAgIC4uLiBldGNcbn1cbiAqL1xuXG5cbnZhciBhcnIgPSBbe25hbWU6ICdKYW5lJ30sIHtuYW1lOiAnSmFzb24nfSwge25hbWU6ICdNaWtlJ31dO1xuXG5cbi8vdmFyIHN0ckFyciA9IGFyci5tYXAoXy5wcm9wZXJ0eSgnbmFtZScpKTtcbnZhciBzdHJBcnIgPSBhcnIubWFwKCh4KSA9PiB4Lm5hbWUpO1xuY29uc29sZS5sb2coc3RyQXJyKTtcblxuXG4vKiBNYWludGFpbmluZyBsZXhpY2FsIHNjb3BlXG5cblNvbWVDbGFzcy5wcm90b3R5cGUuc29tZU1ldGhvZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgIHRoaXMueCsrO1xuICAgICAgICB0aGlzLnkrKztcbiAgICB9KTtcbn1cblxuKi9cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coY291bnQrKyksIDQwMCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHZhbGlkYXRlSWRcbn07XG5cbmNvbnN0IElEX1BSRUZJWCA9ICdVU0VSXyc7XG5mdW5jdGlvbiB2YWxpZGF0ZUlkKGlkKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBpZCA9PSAnc3RyaW5nJyAmJiBpZC5pbmRleE9mKElEX1BSRUZJWCkgPT09IDA7XG59XG4iXX0=
