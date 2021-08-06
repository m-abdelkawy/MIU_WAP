const my_math = (function () {
    const add = function (x, y) {
        return x + y;
    };
    const subtract = function (x, y) {
        return x - y;
    };
    const multiply = function (x, y) {
        return x * y;
    };
    const divide = function(x,y){
        return x/y;
    };
    const pi = 3.14;
    return {
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide,
        pi: pi
    }
})();

module.exports = my_math;