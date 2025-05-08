/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    /*for(let i=0; i<nums.length; i++){
        if(i>0 && nums[i]<nums[i-1]) return nums[i]
    }

    return nums[0]*/
    let start = 0
    let end = nums.length-1
    while(start<end){
        let mid = Math.floor(start+(end-start)/2)
        if(mid>0&&nums[mid-1]>nums[mid]) return nums[mid]
        else if(nums[mid]>= nums[start]&&nums[mid]>nums[end]) start=mid+1
        else if(nums[mid]>=nums[start] && nums[mid]<nums[end])end=mid-1
        else if(nums[mid]<nums[end] && nums[mid]<nums[start]) end=mid-1
    }

    return nums[start]
};