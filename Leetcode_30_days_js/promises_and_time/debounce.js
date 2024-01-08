/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */

// giảm tần suất gọi hàm
// chờ sau t mới thực thi, nếu trong t mà gọi lại thì bỏ lần gọi trước đó
var debounce = function(fn, t) {
    let timeoutId

    return function(...args) {
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId)
            timeoutId = undefined
        }

        timeoutId = setTimeout(() => {
            return fn(...args)
        }, t)
    }


};

let start = Date.now();
function log(...inputs) { 
  console.log([Date.now() - start, inputs ])
}
const dlog = debounce(log, 50);
setTimeout(() => dlog(1), 50);
setTimeout(() => dlog(2), 75);

import _ from "lodash"

const debounceLog = _.debounce(log, 50)
setTimeout(() => debounceLog(1), 50);
setTimeout(() => debounceLog(2), 75);