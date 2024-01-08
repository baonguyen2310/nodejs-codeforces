/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    while (n > 0) {
        let result = []
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                result = result.concat(arr[i])
            } else {
                result.push(arr[i])
            }
        }
        arr = result

        n--
    }

    return arr
}

// Trong bài này đệ quy nhanh hơn vòng lặp

// concat(arr[i]) chậm hơn so với push(...arr[i])
var flatRecursionByReduceConcat = function (arr, n) {
    if (n == 0) {
        return arr
    }

    return arr.reduce((prev, curr) => {
        if (Array.isArray(curr)) {
            prev = prev.concat(flatRecursionByReduceConcat(curr, n - 1))
        } else {
            prev.push(curr)
        }
        return prev
    }, [])
}

var flatRecursion = function (arr, n) {
    if (n == 0) {
        return arr
    }

    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...flatRecursion(arr[i], n - 1))
        } else {
            result.push(arr[i])
        }
    }

    return result
}


var arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
var n = 1
console.log(flatRecursion(arr, n))
console.log(arr.flat(n))