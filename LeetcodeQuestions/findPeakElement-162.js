/**
 * @param {number[]} nums
 * @return {number}
 * 
 * Recursive solution:
 * Time: O(log n) where n is the length of nums arr;
 * Space: O(log n) for the recursive stack
 * 
 * Iterative Solution
 * Time: O(log n) where n is the length of the input arr.
 * Space: O(1) as there is not additional data structure used.
 * 
 */
var findPeakElementIter = function(nums) {
    return binarySearch(nums, 0, nums.length - 1);
};

function binarySearch(nums, left, right) {
    if (left === right) return left;
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
        return binarySearch(nums, left, mid);
    }
    return binarySearch(nums, mid + 1 ,right)
}

var findPeakElement = function(nums) {
    let left = 0, right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right)/2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}