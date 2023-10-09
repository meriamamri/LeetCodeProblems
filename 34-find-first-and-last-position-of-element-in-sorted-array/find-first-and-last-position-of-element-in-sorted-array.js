/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0
    let end = nums.length-1
    let firstIndex = -1
    let secondIndex = -1
    while(start<=end){
        let mid = Math.floor(start+(end-start)/2)
        if(nums[mid]===target){
            firstIndex=mid
            secondIndex=mid
            while(nums[firstIndex-1]===target){
                firstIndex=firstIndex-1
            }

            while(nums[secondIndex+1]===target){
                secondIndex=secondIndex+1
            }

            return [firstIndex, secondIndex]
        }
        else if(nums[mid]<target){
            start=mid+1
        }else{
            end=mid-1
        }
    }

    return [firstIndex, secondIndex]
};