var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({"length": m + 1}, () => Array.from({"length": n + 1}, () => 0))
    dp[0][1] = 1
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j]= obstacleGrid[i - 1][j - 1] === 0 ? dp[i - 1][j] + dp[i][j - 1] : 0
        }
    }
    return dp[m][n]
};

console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))