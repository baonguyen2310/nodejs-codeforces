/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let count = 0

    return function(...args){
        if (count === 0) {
            count++
            return fn(...args)
        } else {
            return undefined
        }
    }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)
console.log(onceFn(1,2,3)) // 6
console.log(onceFn(2,3,6)) // undefined
