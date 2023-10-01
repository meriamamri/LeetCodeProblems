/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let DuplicateMap = new Map()
    for(let i=0; i<nums.length; i++){
        let j = DuplicateMap.get(nums[i])
        if(j!=undefined){
            if(Math.abs(i-j)<=k){
                return true
            }
        }
        DuplicateMap.set(nums[i], i)
    }

    return false
};