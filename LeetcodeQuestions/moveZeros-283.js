function moveZeros(nums) {
    let nonZeroIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIdx] = nums[i];
            nonZeroIdx++;
        }
    }

    for (let i = nonZeroIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
}

console.log(moveZeros([0,1,0,3,12]))
console.log(moveZeros([0]))