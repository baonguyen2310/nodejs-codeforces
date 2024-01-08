/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j=i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                return [i, j]
            }
        }
    }
};

var twoSumOnePassHashtable = function(nums, target) {
    let hashtable = {}

    for(let i = 0; i < nums.length; i++) {
        hashtable[nums[i]] = i //key la value, value la index
    }

    for (let i = 0; i < nums.length; i++) {
        var complement = target - nums[i]
        if (hashtable[complement] && hashtable[complement] != i) {
            return [i, hashtable[complement]]
        }
    }
};

var twoSumTwoPassHashtable = function(nums, target) {
    let hashtable = {}

    for (let i = 0; i < nums.length; i++) {
        var complement = target - nums[i]
        
        if (hashtable[complement] != undefined && hashtable[complement] != i) {
            return [i, hashtable[complement]]
        }

        hashtable[nums[i]] = i
    }
};

var nums = [2,7,11,15]
var target = 9
var result = twoSumTwoPassHashtable(nums, target)
console.log(result)