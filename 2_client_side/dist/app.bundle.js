(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');

console.log('Client side code started');

utils.count();

},{"./utils":2}],2:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXN0YXJ0ZXIvMV9jbGllbnRfc2lkZS9jbGllbnQvYXBwL21haW4uanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXN0YXJ0ZXIvMV9jbGllbnRfc2lkZS9jbGllbnQvYXBwL3V0aWxzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsWUFBWSxDQUFDOztBQUViLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQzs7QUFFL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztBQUV4QyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7OztBQ05kLFlBQVksQ0FBQzs7QUFFYixNQUFNLENBQUMsT0FBTyxHQUFHO0FBQ2IsU0FBSyxFQUFMLEtBQUs7Q0FDUixDQUFDOztBQUVGLFNBQVMsS0FBSyxHQUFHO0FBQ2IsUUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO0FBQ2QsZUFBVyxDQUFDO2VBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztLQUFBLEVBQUUsR0FBRyxDQUFDLENBQUM7Q0FDaEQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbmNvbnNvbGUubG9nKCdDbGllbnQgc2lkZSBjb2RlIHN0YXJ0ZWQnKTtcblxudXRpbHMuY291bnQoKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgY291bnRcbn07XG5cbmZ1bmN0aW9uIGNvdW50KCkge1xuICAgIHZhciBjb3VudCA9IDA7XG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gY29uc29sZS5sb2coY291bnQrKyksIDQwMCk7XG59XG4iXX0=
