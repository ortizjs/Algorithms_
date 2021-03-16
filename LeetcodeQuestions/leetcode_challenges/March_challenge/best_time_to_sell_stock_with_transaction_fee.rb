def max_profit(prices, fee)
    n = prices.length
    if n < 2
        return 0
    end

    total_profit = 0
    buy_price = prices[0]
    (1...prices.length).each do |i|
        current_price = prices[i]
        if current_price < buy_price
            buy_price = current_price
        elsif current_price > buy_price + fee
            total_profit += current_price - buy_price - fee
            buy_price = current_price - fee
        end
    end
    total_profit
end

puts max_profit([1,3,2,8,4,9], 2)
puts max_profit([1,3,7,5,10,3], 3)