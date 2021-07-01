/**
 * @param {number[]} nums
 * @return {number}
 * Time: O(n) for the length of the input array.
 * Space: O(1) as there is no additional data strucuted used.
 */
var removeDuplicates = function(nums) {
    let idx = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[idx] !== nums[i]) {
            idx++;
            nums[idx] = nums[i];
        }
    }
    return idx + 1;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([1,1,2,3,4,5,6,7,7,7,7]));