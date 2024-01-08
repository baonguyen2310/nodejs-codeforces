/**
 * @param {string} s
 * @return {number}
 */

var checkAllCharUnique = function(substring) {
    let charSet = new Set()

    for (let k = 0; k < substring.length; k++) {
        if (charSet.has(substring[k])) {
            return false
        }

        charSet.add(substring[k])
    }

    return true
}

var lengthOfLongestSubstringBruteForce = function(s) {
    let maxLength = 0

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) { // i và j có thể trùng vị trí => substring.length = 1
            var substring = s.substring(i, j + 1)
            if (checkAllCharUnique(substring)) {
                maxLength = Math.max(maxLength, substring.length)
            }
        }
    }

    return maxLength
}


var lengthOfLongestSubstringHashtable = function(s) { // dùng số lượng
    let maxLength = 0
    let hashtable = {}

    let left = 0
    let right = 0

    while(right < s.length) {
        if (hashtable[s[right]] == undefined) { // ký tự chưa xuất hiện trước đó trong substring
            hashtable[s[right]] = 1
        } else { // ký tự đã xuất hiện trước đó trong substring
            hashtable[s[right]]++

            // kéo left lên đến khi hashtable[s[right]] không còn > 1: kéo đến khi thoả
            while(hashtable[s[right]] > 1) {
                hashtable[s[left]]--
                left++
            }
        }
        maxLength = Math.max(maxLength, right - left + 1)

        right++
    }

    return maxLength
};

var lengthOfLongestSubstringOptimizedHashtable = function(s) { // dùng vị trí
    // Để dùng mảng bắt đầu từ 1: lưu size gốc, chèn 1 ký tự vào đầu

    let maxLength = 1
    let currentLength = 1
    let hashtable = {}

    let left = 0
    let right = 1

    if (s.length == 0) { // trường hợp không có head: chuỗi s rỗng
        return 0
    }

    hashtable[s[left]] = left // dùng dummyHead sẽ phải xử lý trường hợp không có head
    // => Đừng dùng dummyHead, sẽ tự đúng với các trường hợp đặc biệt

    while(right < s.length) {
        if (hashtable[s[right]] == undefined) { // ký tự chưa xuất hiện trước đó trong substring
            hashtable[s[right]] = right // đánh dấu vị trí của ký tự
            
            currentLength++
        } else { // ký tự đã xuất hiện trước đó trong substring
            // kéo left đến sau vị trí lần trước của ký tự
            if (hashtable[s[right]] >= left) {
                left = hashtable[s[right]] + 1
            }

            hashtable[s[right]] = right // đánh dấu vị trí mới của ký tự
            
            currentLength = right - left + 1
        }

        //cap nhat max length
        if (maxLength < currentLength) {
            maxLength = currentLength
        }

        right++
    }
    

    return maxLength
};

var lengthOfLongestSubstringOptimizedHashtable2 = function(s) { // dùng vị trí
    let maxLength = 0
    let hashtable = {}

    let left = 0
    let right = 0

    while(right < s.length) {
        if (hashtable[s[right]] == undefined) { // ký tự chưa xuất hiện trước đó trong substring
            hashtable[s[right]] = right // đánh dấu vị trí của ký tự

        } else { // ký tự đã xuất hiện trước đó trong substring
            
            // kéo left đến sau vị trí lần trước của ký tự
            if (hashtable[s[right]] >= left) {
                left = hashtable[s[right]] + 1
            }

            hashtable[s[right]] = right // đánh dấu vị trí mới của ký tự
        }

        maxLength = Math.max(maxLength, right - left + 1)

        right++
    }
    

    return maxLength
};


var s = "13"
var result = lengthOfLongestSubstringOptimizedHashtable2(s)
console.log(result)

var s = "tmmzuxt"
var result = lengthOfLongestSubstringOptimizedHashtable2(s)
console.log(result)

s = "pwwkew"
result = lengthOfLongestSubstringOptimizedHashtable2(s)
console.log(result)