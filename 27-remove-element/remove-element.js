/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let writeIndex = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==val){
            nums[writeIndex]=nums[i]
            writeIndex++
        }
    }
    return writeIndex
};