/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let dp = Array.from({"length": m + 1}, () => Array.from({"length": n + 1}, () => 0))
    dp[m][n] = obstacleGrid[m - 1][n - 1] === 1 ? 0 : 1;
    
    for (let i = n - 1; i >= 1; i--) {
        if (obstacleGrid[m - 1][i - 1] === 1 || dp[m][i + 1] === 0) {
            dp[m][i] = 0;
        } else {
            dp[m][i] = 1;
        }
    }
    
    for (let i = m - 1; i >= 1; i--) {
        if (obstacleGrid[i - 1][n - 1] === 1 || dp[i + 1][n] === 0) {
            dp[i][n] = 0;
        } else {
            dp[i][n] = 1;
        }
    }
    
    console.log(dp)
    for (let i = m - 1; i >= 1; i--) {
        for (let j = n - 1; j >= 1; j--) {
            if (obstacleGrid[i - 1][j - 1] === 1){
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i + 1][j] + dp[i][j+1]
            }
        }
    }
    // console.log(dp)
    return dp[1][1]
};

function dfs(i,j,m,n, grid) {
    if (i === m || j === n || grid[i][j] === 1 ) {
        return 0;
    }
    
    if (i === m - 1 && j === n - 1) {
        return 1;
    }
    
    return dfs(i + 1, j , m, n, grid) + dfs(i, j + 1, m, n, grid)
}
