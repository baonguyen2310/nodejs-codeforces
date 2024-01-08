/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    return this.nums.reduce((prev, curr) => prev + curr, 0)
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    return "[" + this.nums.toString() + "]"
}

var obj1 = new ArrayWrapper([1,2])
var obj2 = new ArrayWrapper([3,4])
console.log(obj1 + obj2) // 10
console.log(String(obj1)) // "[1,2]"
console.log(String(obj2)) // "[3,4]"

var obj1 = new ArrayWrapper([])
var obj2 = new ArrayWrapper([])
console.log(obj1 + obj2) // 10
console.log(String(obj1)) // "[1,2]"
console.log(String(obj2)) // "[3,4]"