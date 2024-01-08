var TimeLimitedCache = function() {
    
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    
    if (this.pairs === undefined) {
        this.pairs = {}
    }

    let isExisted = false
    let isExistedUnExpired = false
    if (this.pairs[key] !== undefined) {
        isExisted = this.pairs[key] !== undefined
        isExistedUnExpired = this.pairs[key].expiredAt - Date.now() > 0
    }

    if (this.pairs[key] === undefined) {
        this.pairs[key] = {}
    }

    this.pairs[key].value = value
    this.pairs[key].expiredAt = Date.now() + duration

    return isExisted && isExistedUnExpired
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.pairs === undefined) {
        return -1
    }

    if (this.pairs[key].expiredAt - Date.now() > 0) {
        return this.pairs[key].value
    } else {
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    let count = 0

    if (this.pairs === undefined) {
        return count
    }

    for (let key in this.pairs) {
        if (this.pairs[key].expiredAt - Date.now() > 0) {
            count++
        }
    }

    return count
};

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
setTimeout(() => console.log(timeLimitedCache.get(1)), 2000)