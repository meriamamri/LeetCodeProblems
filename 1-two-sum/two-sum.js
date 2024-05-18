/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numsMap = new Map()
    for(let i=0; i<nums.length; i++){
        let difference = target-nums[i]
        if(numsMap.has(difference)){
            return [numsMap.get(difference), i]
        }else{
            numsMap.set(nums[i], i)
        }
    }
    
};