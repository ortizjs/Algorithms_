function maxCoins(nums) {
    let len = nums.length;
    if (len === 0) {
        return 0;
    }

    let dp = Array.from({"length": len}, () => Array.from({"length": len}, () => null));

    for (let n = 0; n < len; n++) {
        for (let i = 0; i + n < len; i++) {
            let j = i + n;
            for (let k = i; k <= j; k++) {
                let leftNum = i === 0 ? 1 : nums[i - 1];
                let rightNum = j === len - 1 ? 1 : nums[j + 1];

                let left = k === i ? 0 : dp[i][k - 1];
                let right = k === j ? 0 : dp[k + 1][j];

                dp[i][j] = Math.max(dp[i][j], leftNum * nums[k] * rightNum + left + right);
            }
        }
    }
    console.log(dp)
    return dp[0][len - 1];
}

console.log(maxCoins([3,1,5,8]));