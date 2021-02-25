var findUnsortedSubarray = function (nums) {
    let minVal = Infinity;
    let maxVal = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (isOutOfOrder(i, num, nums) === true) {
            minVal = Math.min(minVal, num);
            maxVal = Math.max(maxVal, num);
        }
    }

    if (maxVal === -Infinity) return 0;

    let leftSubIdx = 0;
    let rightSubIdx = nums.length - 1;

    while (nums[leftSubIdx] <= minVal) {
        leftSubIdx++;
    }
    while (nums[rightSubIdx] >= maxVal) {
        rightSubIdx--;
    }
    return Math.abs(rightSubIdx - leftSubIdx) + 1;
};

function isOutOfOrder(i, num, nums) {
    if (i === 0) return num > nums[i + 1];
    if (i === nums.length - 1) return num < nums[i - 1];
    return nums[i + 1] < num || nums[i - 1] > num
}

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
console.log(findUnsortedSubarray([1, 2, 3, 4]))
console.log(findUnsortedSubarray([1]))