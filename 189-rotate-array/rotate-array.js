/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;

    if (k === 0) {
        return;  // No rotation needed
    }

    // Reverse the first part of the array (from 0 to nums.length - k - 1)
    console.log(k, nums.length - k - 1, nums.length - k)
    reverse(nums, 0, nums.length - k - 1);

    // Reverse the second part of the array (from nums.length - k to nums.length - 1)
    reverse(nums, nums.length - k, nums.length - 1);

    // Reverse the entire array
    reverse(nums, 0, nums.length - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        // Swap elements at start and end indices
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}