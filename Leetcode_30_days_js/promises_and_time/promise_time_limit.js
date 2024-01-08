/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimitRace = function(fn, t) {
    
    return async function(...args) {
        return Promise.race([
            fn(...args),
            new Promise((resolve, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
        ])
    }
};

var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t)
            
            fn(...args).then((value) => {
                clearTimeout(timeoutId)
                resolve(value)
            }).catch((err) => {
                clearTimeout(timeoutId)
                reject(err)
            })
        })
    }
};

var fn = async (n) => { 
    await new Promise(res => setTimeout(res, 100)); 
    return n * n; 
}
var inputs = [5]
var t = 50
const limited = timeLimit(fn, t)
const start = performance.now()
let result;
try {
   const res = await limited(...inputs)
   result = {"resolved": res, "time": Math.floor(performance.now() - start)};
} catch (err) {
   result = {"rejected": err, "time": Math.floor(performance.now() - start)};
}
console.log(result) // Output

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */