/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result = x

        for (let i = 0; i < functions.length; i++) {
            result = functions[functions.length - 1 -i](result)
        }

        return result
    }
};

var composeByReduce = function(functions) {
    return function(x) {
        return functions.reduceRight((accum, curr) => {
            return curr(accum)
        }, x)
    }
}

var fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9

var fn = composeByReduce([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9