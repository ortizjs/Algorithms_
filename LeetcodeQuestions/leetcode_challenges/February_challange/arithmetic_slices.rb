def number_of_arithmetic_slices(a)
    if a.length < 3
        return 0
    end
    n = a.length
    dp = Array.new(n).fill(0)
    num_slices = 0
    
    (2...n).each do |i|
        if a[i] - a[i - 1] == a[i - 1] - a[i - 2]
            dp[i] = dp[i - 1] + 1
        end
        num_slices += dp[i]
    end
    return num_slices
end