function findDuplicateSpaceEditionBestMode(nums) {
    for (let i = 0; i < nums.length; i++) {
        let currentNode = nums[i];
        let value = Math.abs(currentNode);
        let nextPointerIdx = value - 1;
        let nextPointerValue = nums[nextPointerIdx];

        if (nextPointerValue < 0) {
            return value;
        } else {
            nums[nextPointerIdx] = nums[nextPointerValue] * -1
        }
    }
    return 0
}


console.log(findDuplicateSpaceEditionBestMode([1, 1]))
console.log(findDuplicateSpaceEditionBestMode([1, 2, 3, 2]))
console.log(findDuplicateSpaceEditionBestMode([1, 2, 5, 5, 5, 5]))
console.log(findDuplicateSpaceEditionBestMode([4, 1, 4, 8, 3, 2, 7, 6, 5]))