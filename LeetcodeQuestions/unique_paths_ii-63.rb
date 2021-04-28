def unique_paths_with_obstacles(obstacle_grid)
    m = obstacle_grid.length
    n = obstacle_grid[0].length
    dp = Array.new(m + 1) {Array.new(n + 1).fill(0)}
    dp[0][1] = 1
    
    (1..m).each do |i|
        (1..n).each do |j|
            dp[i][j] = obstacle_grid[i - 1][j - 1] === 0 ? dp[i][j - 1] + dp[i - 1][j] : 0
        end
    end
    dp[m][n]
end