/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let result = 0

    s = s.trimStart()

    let isNegative = false

    if (s[0] == "+") {
        s = s.slice(1)
    } else if (s[0] == "-") {
        s = s.slice(1)
        isNegative = true
    }

    while (s[0] == "0") {
        s = s.slice(1)
    }
    

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i]) || s[i] == " ") {
            break
        } else {
            result = result * 10 + Number.parseInt(s[i])

            if (!isNegative && result > 2147483647) {
                return 2147483647
            }

            if (isNegative && -result < -2147483648) {
                return -2147483648
            }
        }
    }

    if (isNegative) {
        result = -result
    }

    return result 
};

var s = "-+42"
var result = myAtoi(s)
console.log(result)

var s = "   -42"
var result = myAtoi(s)
console.log(result)

var s = "4193 with words"
var result = myAtoi(s)
console.log(result)

var s = "0032"
var result = myAtoi(s)
console.log(result)

var s = "2147483650"
var result = myAtoi(s)
console.log(result)