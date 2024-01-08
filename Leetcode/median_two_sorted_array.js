/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays1 = function(nums1, nums2) {
    let mergeArray = nums1.concat(nums2)
    mergeArray.sort((a, b) => a - b)

    //console.log(mergeArray)

    let median
    if (mergeArray.length % 2 != 0) {
        median = mergeArray[Math.floor(mergeArray.length / 2)]
    } else {
        median = (mergeArray[mergeArray.length / 2 - 1] + mergeArray[mergeArray.length / 2]) / 2
    }

    return median
};

var findMedianSortedArraysMergeSort = function(nums1, nums2) {
    let mergeArray = [] // sắp nums1 vào nums2
    let median

    let i = 0
    let j = 0

    const sumLength = nums1.length + nums2.length

    if (sumLength % 2 != 0) {
        for (let k = 0; k <= Math.floor(sumLength / 2); k++) {
            if (nums1[i] < nums2[j] || nums2[j] == undefined) {
                mergeArray.push(nums1[i])
                i++
            } else {
                mergeArray.push(nums2[j])
                j++ 
            }
        }

        median = mergeArray[Math.floor(sumLength / 2)]
    } else {
        for (let k = 0; k <= sumLength / 2; k++) {
            if (nums1[i] < nums2[j] || nums2[j] == undefined) {
                mergeArray.push(nums1[i])
                i++
            } else {
                mergeArray.push(nums2[j])
                j++ 
            }
        }

        median = (mergeArray[sumLength / 2 - 1] + mergeArray[sumLength / 2]) / 2
    }

    return median
};

var nums1 = [1,3]
var nums2 = [2]
var result = findMedianSortedArraysMergeSort(nums1, nums2)
console.log(result)

var nums1 = [1,2]
var nums2 = [3,4]
var result = findMedianSortedArraysMergeSort(nums1, nums2)
console.log(result)

var nums1 = [3]
var nums2 = [-2,-1]
var result = findMedianSortedArraysMergeSort(nums1, nums2)
console.log(result)


var nums1 = [0,0]
var nums2 = [0,0]
var result = findMedianSortedArraysMergeSort(nums1, nums2)
console.log(result)