/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function(nums) {
    let sum = 0;
    let sums = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        sums[i] = sum += nums[i];
    }
    return sums
};