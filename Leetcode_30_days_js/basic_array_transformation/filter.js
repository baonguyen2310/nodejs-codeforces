/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const filteredArray = []

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArray.push(arr[i])
        }
    }

    return filteredArray
};

var arr = [1,2,3]
var fn = function greaterThan(n) { return n > 2 }
console.log(filter(arr, fn))
console.log(arr.filter(fn))