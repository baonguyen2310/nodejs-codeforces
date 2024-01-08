/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: (expectVal) => {
            if (val !== expectVal) {
                throw new Error("Not Equal")  
            }

            return true
        },
        notToBe: (expectVal) => {
            if (val === expectVal) {
                throw new Error("Equal")
            }

            return true
        }
    }
};

try {
    console.log(expect(5).toBe(5)) // true
} catch (error) {
    console.log(`Error: ${error.message}`)
}

try {
    console.log(expect(5).notToBe(5)) // throws "Equal"
} catch (error) {
    console.log(`Error: ${error.message}`)
}