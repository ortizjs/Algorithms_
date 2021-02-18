function numberOfArithmeticSlices(nums) {
    if (nums.length < 3) return 0;
    let n = nums.length;
    let dp = new Array(n).fill(0);
    let numSlices = 0;
    for (let i = 2; i < n; i++) {
        if (nums[i] - nums[i - 1] === nums[i - 1] - nums[i - 2]) {
            dp[i] = dp[i - 1] + 1;
        }
        numSlices += dp[i]
    }
    return numSlices;
}

console.log(numberOfArithmeticSlices([1, 2, 3, 4]))