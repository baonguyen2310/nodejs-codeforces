/**
 * @param {Function} fn
 * @return {Function}
 */

/*
    MẶC DÙ KEY CỦA MAP CÓ THỂ DÙNG MỌI TYPE, 
    NHƯNG KEY LÀ ARRAY HOẶC BẤT KỲ OBJECT NÀO THÌ NÓ ĐỀU LÀ THAM CHIẾU
    VÀ SO SÁNH TRONG MAP LÀ ===

    NÊN DÙNG JSON.stringify() THAY CHO .toString()
    const map = new Map();

    const key1 = ["1,3", 2];
    const key2 = [1, 3, "2"];

    map.set(key1.toString(), 'Value for key1');
    console.log(map.get(key2.toString())); // Output: Value for key1
*/

function equalArray(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }

    return true
}

function memoize_(fn) {
    let cachedInputs = []
    let cachedResults = []

    return function(...args) {
        for (let i = cachedInputs.length - 1; i >= 0; i--) {
            if (equalArray(cachedInputs[i], [...args])) {
                //console.log("from cache")
                return cachedResults[i]
            }
        }

        cachedInputs.push([...args])
        cachedResults.push(fn(...args))
        return cachedResults[cachedResults.length - 1]
    }
}

function memoize(fn) {
    const cacheHash = new Map()

    return function(...args) {
        const key = JSON.stringify([...args])

        if (!cacheHash.has(key)) {
            cacheHash.set(key, fn(...args))
        }
        
        return cacheHash.get(key)
    }
}


var callCount = 0
var memoizedFn = memoize(function (a, b) {
    callCount += 1
    return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1

import _ from 'lodash'
var callCount = 0
var memoizedFn = _.memoize(function (a, b) {
    callCount += 1
    return a + b
})
console.log(memoizedFn(2, 3)) // 5
console.log(memoizedFn(2, 3)) // 5
console.log(callCount) // 1
