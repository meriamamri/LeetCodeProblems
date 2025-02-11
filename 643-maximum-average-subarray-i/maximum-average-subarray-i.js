/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let start = 0
    let end = 0
    let maxAvg = -Infinity
    let sum = 0

    while(end<nums.length){
        sum += nums[end]
        if(end-start+1===k){
            let currentAvg = sum/k
            if(currentAvg>maxAvg){
                maxAvg = currentAvg
            }

            sum-=nums[start]
            start++
        }
        end++
    }

    return maxAvg
};