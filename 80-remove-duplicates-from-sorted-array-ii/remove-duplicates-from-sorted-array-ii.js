/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 2
    let uniqueIndex = 2

    for(let i=2; i<nums.length; i++){
        if(nums[i]!==nums[uniqueIndex-k]){
            nums[uniqueIndex]=nums[i]
            uniqueIndex++
        }
    }

    return uniqueIndex
};