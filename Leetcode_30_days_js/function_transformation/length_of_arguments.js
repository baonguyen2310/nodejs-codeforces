/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

// spread là phân giải
// rest là gộp lại (phần còn lại)
var argumentsLength = function(...args) { // rest
    return args.length
};

console.log(argumentsLength(1, 2, 3)) // 3