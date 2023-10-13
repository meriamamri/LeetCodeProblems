/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    if (k === 0) {
        return; 
    }

    reverse(nums, 0, nums.length - k - 1);

    reverse(nums, nums.length - k, nums.length - 1);

    reverse(nums, 0, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}