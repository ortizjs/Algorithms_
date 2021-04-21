# @param {Integer[][]} triangle
# @return {Integer}
def minimum_total(triangle)
    dp = triangle[triangle.length - 1]
    
    i = triangle.length - 2
    while i >= 0
        j = 0
        while (j <= i)
            dp[j] = [dp[j], dp[j + 1]].min + triangle[i][j]
            j += 1
        end
        i -= 1
    end
    dp[0]
        
end

