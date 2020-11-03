def get_max_profit(stock_prices)
    max_profit = stock_prices[1] - stock_prices[0]
    buy_price = stock_prices[0]

    stock_prices[1...stock_prices.length].each do |current_price|
        current_profit = current_price - buy_price
        max_profit = ([current_profit, max_profit]).max
        buy_price = ([current_price, buy_price]).min
    end
    max_profit
end

stock_prices = [10, 7, 5, 8, 11, 9];
stock_prices2 = [10, 7, 5, 3, 2, 1];

p get_max_profit(stock_prices)
p get_max_profit(stock_prices2)