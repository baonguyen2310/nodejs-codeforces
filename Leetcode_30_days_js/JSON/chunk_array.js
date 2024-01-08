/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunks = []
    const numsOfChunk = Math.ceil(arr.length / size)

    for (let i = 1; i <= numsOfChunk; i++) {
        let start = (i - 1) * size
        let end = i * size

        if (i == numsOfChunk) {
            end = arr.length
        }

        chunks.push(arr.slice(start, end))
    }

    return chunks
};


var arr = [1,2,3,4,5]
var size = 1
console.log(chunk(arr, size))

var arr = [1,9,6,3,2]
var size = 3
console.log(chunk(arr, size))

var arr = [8,5,3,2,6]
var size = 6
console.log(chunk(arr, size))

var arr = []
var size = 1
console.log(chunk(arr, size))