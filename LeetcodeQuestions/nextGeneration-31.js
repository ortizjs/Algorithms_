/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        let j = nums.length - 1;
        while (nums[i] >= nums[j]) {
            j--;
        }
        swap(nums, i, j)
    }
    
    reverse(nums, i + 1)
};

function reverse(nums, start) {
    let i = start, j = nums.length -1;
    while (i < j) {
        swap(nums, i,j);
        i++;
        j--;
    }
}

function swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(nextPermutation([1,2,3]))
console.log(nextPermutation([3,2,1]))
console.log(nextPermutation([1,1,5]))
console.log(nextPermutation([1]))