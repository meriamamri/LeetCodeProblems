/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let l=0
    let r=nums.length-1
    let i=0
    while(i<=r){
        if(nums[i]===0){
            let value = nums[i]
            nums[i]=nums[l]
            nums[l]=value
            i++
            l++
        }else if(nums[i]===1){
            i++
        }else{
            let value = nums[r]
            nums[r] = nums[i]
            nums[i] = value
            r--
            //i++
        }
    }
};