/**
 * @param {number} x
 * @return {number}
 */
var reverse_integer_by_convert = function(x) {
    var result = x.toString().split("").reverse().join("")
    if (result[result.length - 1] == "-") {
        result = "-" + result.slice(0, result.length - 1)
    }

    if (result < - Math.pow(2, 31) || result > Math.pow(2, 31) + 1) {
        return 0
    }
    return result
};

var reverse_integer_by_math = function(x) {
    var result = 0
    while (x != 0) {
        var pop = x % 10
        x = Math.trunc(x / 10)
        //console.log(pop)

        result = result * 10 + pop

        if (result < -2147483648 || result > 2147483649) {
            return 0
        }
    }

    return result
}

// console.log(Math.floor(-123/10)) // phần nguyên âm lấy theo cách này bị sai
// console.log(Math.trunc(-123/10)) // cách này ổn nhất
// console.log((-123 - (-123 % 10)) / 10) // cách này cũng đúng

let x = -123
let result = reverse_integer_by_math(x)
console.log(result)


x = 1534236469
result = reverse_integer_by_math(x)
console.log(result)