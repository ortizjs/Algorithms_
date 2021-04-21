function minimumTotal(triangle) {
    let dp = triangle[triangle.length - 1];
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }
    return dp[0];
}

console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]]))
console.log(minimumTotal([[-10]]))