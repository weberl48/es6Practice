(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var iso = require('../../portable');

console.log('Client side code started');

console.log(iso.validateId('werwef4wg'));

utils.count();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXNyYy8yX3NlcnZlcl9zaWRlL2NsaWVudC9hcHAvbWFpbi5qcyIsIi9Vc2Vycy9qYXNvbmlhbmdyZWVuL3BlcnNvbmFsL3R1dHMvYmFiZWwvYmFiZWwtc3JjLzJfc2VydmVyX3NpZGUvY2xpZW50L2FwcC91dGlscy9pbmRleC5qcyIsIi9Vc2Vycy9qYXNvbmlhbmdyZWVuL3BlcnNvbmFsL3R1dHMvYmFiZWwvYmFiZWwtc3JjLzJfc2VydmVyX3NpZGUvcG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O0FBRXhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDOztBQUV6QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7OztBQ1RkLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsU0FBSyxFQUFMLEtBQUs7Q0FDUixDQUFDOztBQUVGLFNBQVMsS0FBSyxHQUFHO0FBQ2IsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsZUFBVyxDQUFDO2VBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDaEQ7OztBQ1RELFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsY0FBVSxFQUFWLFVBQVU7Q0FDYixDQUFDOztBQUVGLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixTQUFTLFVBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDcEIsV0FBTyxPQUFPLEVBQUUsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDL0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgaXNvID0gcmVxdWlyZSgnLi4vLi4vcG9ydGFibGUnKTtcblxuY29uc29sZS5sb2coJ0NsaWVudCBzaWRlIGNvZGUgc3RhcnRlZCcpO1xuXG5jb25zb2xlLmxvZyhpc28udmFsaWRhdGVJZCgnd2Vyd2VmNHdnJykpO1xuXG51dGlscy5jb3VudCgpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb3VudFxufTtcblxuZnVuY3Rpb24gY291bnQoKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdmFsaWRhdGVJZFxufTtcblxuY29uc3QgSURfUFJFRklYID0gJ1VTRVJfJztcbmZ1bmN0aW9uIHZhbGlkYXRlSWQoaWQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlkID09ICdzdHJpbmcnICYmIGlkLmluZGV4T2YoSURfUFJFRklYKSA9PT0gMDtcbn1cbiJdfQ==
