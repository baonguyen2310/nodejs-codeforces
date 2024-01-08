/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init

    return {
        increment: () => {
            return ++current
        },
        decrement: () => {
            return --current
        },
        reset: () => {
            current = init
            return init
        }
    }
};

const counter = createCounter(5)
console.log(counter.increment()) // 6
console.log(counter.reset()) // 5
console.log(counter.decrement()) // 4