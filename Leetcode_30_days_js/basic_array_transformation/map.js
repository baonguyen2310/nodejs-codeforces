/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const returnedArray = new Array(arr.length)

    for (let i = 0; i < returnedArray.length; i++) {
        returnedArray[i] = fn(arr[i], i)
    }

    return returnedArray
};

var arr = [1,2,3]
var fn = function plusone(n) { return n + 1; }
console.log(map(arr, fn))
console.log(arr.map(fn))