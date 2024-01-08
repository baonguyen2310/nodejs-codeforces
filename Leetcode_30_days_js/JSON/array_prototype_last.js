/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    return this.length === 0 ? -1 : this[this.length - 1]
};

var arr = [1, 2, 3]
console.log(arr.last())

var arr = []
console.log(arr.last())

var arr = [null]
console.log(arr.last())

var arr = [undefined]
console.log(arr.last())