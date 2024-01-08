/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(arr, fn, init) {
    let accumulator = init // bình sạc điện, tích tụ
    for (let i = 0; i < arr.length; i++) {
        accumulator = fn(accumulator, arr[i], i) 
        // việc hàm callback nhận thêm index và array giúp tăng tính linh hoạt
        // thêm index để xử lý riêng từng index
        // thêm array để có thông tin về toàn bộ mảng (min, max, ...)
    }

    return accumulator
};

var arr = [1,2,3,4]
var fn = function sum(accum, curr) { return accum + curr }
var init = 0
console.log(reduce(arr, fn, init))
console.log(arr.reduce(fn, init))