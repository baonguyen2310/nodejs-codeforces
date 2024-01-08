/**
 * @param {string} s
 * @return {string}
 */

var checkPalindromic = function(s) {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] != s[s.length - 1 - i]) {
            return false
        }
    }

    return true
}

var longestPalindromeBruteForce = function(s) {
    let maxLength = 0
    let longestPalindromeSubstring

    // 1 - duyệt toàn bộ substring
    // 2 - check đối xứng
    // 3 - lấy substring đối xứng dài nhất

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            var substring = s.substring(i, j + 1)
            if (checkPalindromic(substring)) {
                if (maxLength < substring.length) {
                    longestPalindromeSubstring = substring
                    maxLength = substring.length
                }
            }
        }
    }

    return longestPalindromeSubstring
};

var longestPalindromeDynamicProgramming = function(s) {
    const n = s.length

    let maxLength = 1
    let longestPalindromeSubstring = s[0]

    // dp[i][j] là true nếu chuỗi con có 2 đầu i, j là chuỗi con đối xứng
    // dp[i][j] = dp[i+1][j-1] và s[i] == s[j]

    // đỗi xứng lẻ (b): ít nhất là 1 ký tự
    // đỗi xứng chẵn (bb): ít nhất là 2 ký tự gần nhau giống nhau
    // kể từ đó công thức truy hồi đúng cho cả 2 trường hợp

    // khởi tạo mảng 2 chiều dp
    const dp = Array(n).fill().map(() => Array(n).fill(false))
    // nếu không có fill thì sẽ là empty items và không map được
    // có fill thì sẽ là undefined và map được

    // đối xứng lẻ: 1 phần tử
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true
    }
    
    // đối xứng chẵn: 2 phần tử gần nhau giống nhau
    for (let i = 0; i < s.length - 1; i++) {
        dp[i][i+1] = s[i] == s[i+1]

        if (dp[i][i+1]) {
            var substring = s.substring(i, i + 2)
            if (maxLength < substring.length) {
                longestPalindromeSubstring = substring
                maxLength = substring.length
            }
        }
    }

    // áp dụng công thức truy hồi, từ trong tâm nhỏ đi ra dần về bên phải
    // phải tính những thằng gần tâm trước vì nó là cơ sở để tính những thằng xa hơn

    for (let offset = 2; offset < n; offset++) { // độ xa từ 2 đến n-1
        for (let i = 0; i < n - offset; i++) { // i cuối phải đủ để offset
            const j = i + offset
            
            dp[i][j] = dp[i+1][j-1] && s[i] == s[j]

            if (dp[i][j]) {
                var substring = s.substring(i, j + 1)
                if (maxLength < substring.length) {
                    longestPalindromeSubstring = substring
                    maxLength = substring.length
                }
            }
        }
    }

    //console.log(dp)

    return longestPalindromeSubstring
};

var s = "babad"
var result = longestPalindromeDynamicProgramming(s)
console.log(result)

var s = "cbbd"
var result = longestPalindromeDynamicProgramming(s)
console.log(result)