/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindromeByConvertToString = function(x) {
    const s = x.toString()

    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false
        }
    }

    return true
};

var reverse_integer_by_math = function(x) {
    var result = 0
    while (x != 0) {
        var pop = x % 10
        x = Math.trunc(x / 10)
        result = result * 10 + pop
    }

    return result
}

var isPalindromeByReverse = function(x) {
    if (x < 0) {
        return false
    }

    return reverse_integer_by_math(x) == x
}

var x = 121
var result = isPalindromeByReverse(x)
console.log(result)

var x = -121
var result = isPalindromeByReverse(x)
console.log(result)