function highestProductOfThree(nums) {
    if (nums.length < 3) {
        throw new Error("Input must contain at least 3 integers!");
    }

    let highestOfThree = nums[0] * nums[1] * nums[2];
    let highestOfTwo = nums[0] * nums[1];
    let lowestOfTwo = nums[0] * nums[1];
    let highest = Math.max(nums[0], nums[1]);
    let lowest = Math.min(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let currentNum = nums[i];
        highestOfThree = Math.max(highestOfThree, highestOfTwo * currentNum, lowestOfTwo * currentNum);
        highestOfTwo = Math.max(highestOfTwo, highest * currentNum, lowest * currentNum);
        lowestOfTwo = Math.min(lowestOfTwo, highest * currentNum, lowest * currentNum);
        highest = Math.max(highest, currentNum);
        lowest = Math.min(lowest, currentNum);
    };
    return highestOfThree;

};

let nums = [-10, -10, 1, 3, 2];
let nums2 = [1, 10, -5, 1, -100];
console.log(highestProductOfThree(nums));
console.log(highestProductOfThree(nums2));