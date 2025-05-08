/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    for(let i=0; i<nums.length; i++){
        nums[i] = nums[i]*nums[i]
    }

    let end = nums.length-1
    let start = 0
    let index = nums.length-1
    let result = []

    while(start<=end){
        if(nums[start]<nums[end]){
            result[index] = nums[end]
            end--
        }else{
            result[index] = nums[start]
            start++
        }
        index--
    }

    return result
};