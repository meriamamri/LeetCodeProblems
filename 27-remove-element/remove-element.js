/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let writeIndex = 0;
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++;
        }
    }

    return writeIndex;
}

/*var removeElement = function(nums, val) {
    let start = 0
    let end = nums.length-1
    while(start<=end){
        if(nums[start]!==val){
            start++
        }else if(nums[start]===nums[end]){
            end--
        }else if(nums[start]===val && nums[end]!==val){
            nums[start]=nums[end]
            start++
            end--
        }
    }
    return start
};*/