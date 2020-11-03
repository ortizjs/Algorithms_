# import math
def get_max_profit(stock_prices):
    max_profit = stock_prices[1] - stock_prices[0]
    buy_price = stock_prices[0]

    for i in range(1,len(stock_prices)):
        current_price = stock_prices[i]
        current_profit = current_price - buy_price
        max_profit = max(current_profit, max_profit)
        buy_price = min(current_price, buy_price)
    return max_profit

stock_prices = [10, 7, 5, 8, 11, 9]
stock_prices2 = [10, 7, 5, 3, 2, 1]

print get_max_profit(stock_prices)
print get_max_profit(stock_prices2)
