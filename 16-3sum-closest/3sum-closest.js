/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);

  let smallestDifference = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const targetDifference = target - nums[i] - nums[start] - nums[end];

      if (targetDifference === 0) {
        return target;
      }

      if (
        Math.abs(targetDifference) < Math.abs(smallestDifference) ||
        (Math.abs(targetDifference) === Math.abs(smallestDifference) && targetDifference > smallestDifference)
      ) {
        smallestDifference = targetDifference;
      }

      if (targetDifference > 0) {
        start++;
      } else {
        end--;
      }
    }
  }

  return target - smallestDifference;
}
