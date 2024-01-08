/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {}
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i])
        if (!result[key]) {
            result[key] = []
        }
        result[key].push(this[i])
    }
    return result
};

var arr = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
]
var fn = function (item) { 
    return item.id
}
console.log(arr.groupBy(fn))
console.log(Object.groupBy(arr, fn))

var arr = [
    [1, 2, 3],
    [1, 3, 5],
    [1, 5, 9]
]
var fn = function (item) { 
    return item[0]
}
console.log(arr.groupBy(fn))
console.log(Object.groupBy(arr, fn))

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var fn = function (item) { 
    return item > 5
}
console.log(arr.groupBy(fn))
console.log(Object.groupBy(arr, fn))