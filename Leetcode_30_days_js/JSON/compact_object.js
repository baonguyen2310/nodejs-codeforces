/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

function isObject(value) {
    return typeof value === 'object' && value !== null && !Array.isArray(value)
}

var compactObject = function(obj) {
    if (obj === []) {
        return []
    }
    
    if (obj === {}) {
        return {}
    }

    if (isObject(obj)) {
        const result = {}
        for (let key in obj) {
            if (isObject(obj[key]) || Array.isArray(obj[key])) {
                result[key] = compactObject(obj[key])    
            } else if (obj[key]) {
                result[key] = obj[key]
            }
        }
        return result
    }

    if (Array.isArray(obj)) {
        const result = []
        for (let i = 0; i < obj.length; i++) {
            if (isObject(obj[i]) || Array.isArray(obj[i])) {
                result.push(compactObject(obj[i])) 
            } else if (obj[i]) {
                result.push(obj[i])
            }
        }
        return result
    }
};

var obj = [null, 0, false, 1]
console.log(compactObject(obj))

var obj = {"a": null, "b": [false, 1]}
console.log(compactObject(obj))

var obj = [null, 0, 5, [0], [false, 16]]
console.log(compactObject(obj))