/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var containsNearbyDuplicate = function(nums, k) {
    const numSet = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (i > k) {
        numSet.delete(nums[i - k - 1]); // Remove the number outside the window
        }

        if (numSet.has(nums[i])) {
        return true; // Found a duplicate within the window
        }

        numSet.add(nums[i]); // Add the current number to the set
    }

    return false;
};
/*var containsNearbyDuplicate = function(nums, k) {
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
};*/