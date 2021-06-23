/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Time: O(logN)
 * Space: O(1)
 */
var searchRange = function(nums, target) {
    let firstOccurrence = findBound(nums,target,true);
    if (firstOccurrence === -1) return [-1,-1]
    let lastOccurrence = findBound(nums,target,false);
    return [firstOccurrence, lastOccurrence];
};


function findBound(nums, target, isFirst) {
    let n = nums.length - 1;
    let start = 0, end = n;

    while (start <= end) {
        let pivot = Math.floor((start + end) / 2);

        if (target === nums[pivot]) {
            if (isFirst) {
                if (pivot === start || target !== nums[pivot - 1]) {
                    return pivot;
                }
                end = pivot - 1;
            } else {
                if (pivot === end || target !== nums[pivot + 1]) {
                    return pivot;
                }
                start = pivot + 1;
            }
        } else if (target < nums[pivot]) {
            end = pivot - 1;
        } else {
            start = pivot + 1;
        }
    }
    return -1;
}