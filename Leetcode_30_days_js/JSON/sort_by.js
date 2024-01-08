/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))
}

var arr = [{"x": 1}, {"x": 0}, {"x": -1}]
var fn = (d) => d.x
console.log(sortBy(arr, fn))
