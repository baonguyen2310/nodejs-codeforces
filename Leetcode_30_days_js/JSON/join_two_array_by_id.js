/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    // Dùng reduce cũng tốt
    // arr1 => arr1Hash { value.id : value }
    const arr1Hash = {}
    for (let i = 0; i < arr1.length; i++) {
        arr1Hash[arr1[i].id] = arr1[i]
    }

    // xử lý
    for (let i = 0; i < arr2.length; i++) {
        if (arr1Hash[arr2[i].id]) { // trùng id
            for (let key in arr2[i]) {
                arr1Hash[arr2[i].id][key] = arr2[i][key]
            }
        } else {
            arr1Hash[arr2[i].id] = arr2[i]
        }
    }

    // arr1Hash => array result
    const result = Object.values(arr1Hash)

    return result.sort((a, b) => a.id - b.id)
}

var arr1 = [{"id":1,"b":{"b": 94},"v":[4,3],"y":48}]
var arr2 = [{"id":1,"b":{"c": 84},"v":[1,3]}]
console.log(join(arr1, arr2))
console.log(arr1) // bị mutate
console.log(arr2)