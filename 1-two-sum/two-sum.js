/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let SumMap = new Map()
    for(let i=0; i<nums.length; i++){
        let difference = target-nums[i]
        let index = SumMap.get(difference)
        if(index!==undefined){
            return [index, i]
        }else{
            SumMap.set(nums[i], i)
        }
    }
};