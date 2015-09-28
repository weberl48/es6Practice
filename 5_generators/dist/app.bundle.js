(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var utils = require('./utils');
var iso = require('../../portable');

console.log('Client side code started');

//move to new lesson (4?)
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());
console.log(iso.fibonacci.next());

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

var marked0$0 = [fibonacci].map(regeneratorRuntime.mark);
module.exports = {
    validateId: validateId,
    fibonacci: fibonacci()
};

var ID_PREFIX = 'USER_';
function validateId(id) {
    return typeof id == 'string' && id.indexOf(ID_PREFIX) === 0;
}

function fibonacci() {
    var n1, n2, current, reset;
    return regeneratorRuntime.wrap(function fibonacci$(context$1$0) {
        while (1) switch (context$1$0.prev = context$1$0.next) {
            case 0:
                n1 = 1;
                n2 = 1;

            case 2:
                if (!true) {
                    context$1$0.next = 12;
                    break;
                }

                current = n2;

                n2 = n1;
                n1 += current;
                context$1$0.next = 8;
                return current;

            case 8:
                reset = context$1$0.sent;

                if (reset) {
                    n1 = 1;
                    n2 = 1;
                }
                context$1$0.next = 2;
                break;

            case 12:
            case 'end':
                return context$1$0.stop();
        }
    }, marked0$0[0], this);
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXNyYy80X2dlbmVyYXRvcnMvY2xpZW50L2FwcC9tYWluLmpzIiwiL1VzZXJzL2phc29uaWFuZ3JlZW4vcGVyc29uYWwvdHV0cy9iYWJlbC9iYWJlbC1zcmMvNF9nZW5lcmF0b3JzL2NsaWVudC9hcHAvdXRpbHMvaW5kZXguanMiLCIvVXNlcnMvamFzb25pYW5ncmVlbi9wZXJzb25hbC90dXRzL2JhYmVsL2JhYmVsLXNyYy80X2dlbmVyYXRvcnMvcG9ydGFibGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxZQUFZLENBQUM7O0FBRWIsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUVwQyxPQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7OztBQUd4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs7O0FDaEJsQyxZQUFZLENBQUM7O0FBRWIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLFNBQUssRUFBTCxLQUFLO0NBQ1IsQ0FBQzs7QUFFRixTQUFTLEtBQUssR0FBRztBQUNiLFFBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztBQUNkLGVBQVcsQ0FBQztlQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7S0FBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQ2hEOzs7QUNURCxZQUFZLENBQUM7O2lCQVlILFNBQVM7QUFWbkIsTUFBTSxDQUFDLE9BQU8sR0FBRztBQUNiLGNBQVUsRUFBVixVQUFVO0FBQ1YsYUFBUyxFQUFFLFNBQVMsRUFBRTtDQUN6QixDQUFDOztBQUVGLElBQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQztBQUMxQixTQUFTLFVBQVUsQ0FBQyxFQUFFLEVBQUU7QUFDcEIsV0FBTyxPQUFPLEVBQUUsSUFBSSxRQUFRLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7Q0FDL0Q7O0FBRUQsU0FBVSxTQUFTO1FBQ1gsRUFBRSxFQUNGLEVBQUUsRUFFRSxPQUFPLEVBR1AsS0FBSzs7OztBQU5ULGtCQUFFLEdBQUcsQ0FBQztBQUNOLGtCQUFFLEdBQUcsQ0FBQzs7O3FCQUNILElBQUk7Ozs7O0FBQ0gsdUJBQU8sR0FBRyxFQUFFOztBQUNoQixrQkFBRSxHQUFHLEVBQUUsQ0FBQztBQUNSLGtCQUFFLElBQUksT0FBTyxDQUFDOzt1QkFDSSxPQUFPOzs7QUFBckIscUJBQUs7O0FBQ1Qsb0JBQUksS0FBSyxFQUFFO0FBQ1Asc0JBQUUsR0FBRyxDQUFDLENBQUM7QUFDUCxzQkFBRSxHQUFHLENBQUMsQ0FBQztpQkFDVjs7Ozs7Ozs7O0NBRVIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgaXNvID0gcmVxdWlyZSgnLi4vLi4vcG9ydGFibGUnKTtcblxuY29uc29sZS5sb2coJ0NsaWVudCBzaWRlIGNvZGUgc3RhcnRlZCcpO1xuXG4vL21vdmUgdG8gbmV3IGxlc3NvbiAoND8pXG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7XG5jb25zb2xlLmxvZyhpc28uZmlib25hY2NpLm5leHQoKSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb3VudFxufTtcblxuZnVuY3Rpb24gY291bnQoKSB7XG4gICAgdmFyIGNvdW50ID0gMDtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiBjb25zb2xlLmxvZyhjb3VudCsrKSwgNDAwKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgdmFsaWRhdGVJZCxcbiAgICBmaWJvbmFjY2k6IGZpYm9uYWNjaSgpXG59O1xuXG5jb25zdCBJRF9QUkVGSVggPSAnVVNFUl8nO1xuZnVuY3Rpb24gdmFsaWRhdGVJZChpZCkge1xuICAgIHJldHVybiB0eXBlb2YgaWQgPT0gJ3N0cmluZycgJiYgaWQuaW5kZXhPZihJRF9QUkVGSVgpID09PSAwO1xufVxuXG5mdW5jdGlvbiogZmlib25hY2NpKCkge1xuICAgIHZhciBuMSA9IDE7XG4gICAgdmFyIG4yID0gMTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IG4yO1xuICAgICAgICBuMiA9IG4xO1xuICAgICAgICBuMSArPSBjdXJyZW50O1xuICAgICAgICB2YXIgcmVzZXQgPSB5aWVsZCBjdXJyZW50O1xuICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICAgIG4xID0gMTtcbiAgICAgICAgICAgIG4yID0gMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
