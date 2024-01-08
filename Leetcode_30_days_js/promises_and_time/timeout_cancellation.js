/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */

// cancellable là 1 hàm sẽ thực thi fn sau thời gian t
// và trả về 1 hàm cancelFn
// nếu trước thời gian t, cancelFn được gọi thì nó sẽ huỷ việc thực thi fn
var cancellable = function(fn, args, t) {
    let canceled = false

    setTimeout(() => {
        if (!canceled) {
            console.log(fn(...args))
        }
    }, t)

    return function cancelFn() {
        canceled = true
    }
};

var cancellable = function(fn, args, t) {

    const timerId = setTimeout(() => {
        fn(...args)
    }, t)

    return function cancelFn() {
        clearTimeout(timerId)
    }
};

const cancelTimeMs = 50
const cancelFn = cancellable((x) => x * 5, [2], 20)
setTimeout(cancelFn, cancelTimeMs)