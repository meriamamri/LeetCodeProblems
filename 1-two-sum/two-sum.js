/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsIndicMap = new Map()

    for(let i=0; i<nums.length; i++){
        let diff = target-nums[i]
        if(numsIndicMap.has(diff)) return [i , numsIndicMap.get(diff)]
        else numsIndicMap.set(nums[i], i)
    }
};