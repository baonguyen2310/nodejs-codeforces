/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const result = Array(functions.length).fill() // dùng cách này để giữ vị trí
        let count = 0

        for (let i = 0; i < functions.length; i++) {
            functions[i]()
            .then((value) => {
                result[i] = value
                count++

                if (count === functions.length) {
                    resolve(result)
                }
            }).catch((error) => reject(error))
        }
    })
};

var functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 200)), 
    () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
]

promiseAll(functions)
.then((value) => console.log(value))
.catch((error) => console.log(error))

var functions = [
    () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))
]

promiseAll(functions)
.then((value) => console.log(value))
.catch((error) => console.log(error))

var promises = [
    new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    new Promise(resolve => setTimeout(() => resolve(16), 100))
]

Promise.all(promises)
.then((value) => console.log(value))
.catch((error) => console.log(error))