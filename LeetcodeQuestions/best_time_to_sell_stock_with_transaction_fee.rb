def max_profit(prices, fee)
    total_profit = 0
    min = prices[0]
    
    (1...prices.length).each do |i|
        current = prices[i]
        if current < min
            min = current
        elsif current > min + fee
            total_profit += current - fee - min
            min = current - fee
        end
    end
    return total_profit
end

puts max_profit([1,3,2,8,4,9], 2)
puts max_profit([1,3,7,5,10,3], 3)