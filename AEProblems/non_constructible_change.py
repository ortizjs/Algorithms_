def nonConstructibleChange(coins):
    # Write your code here.
    if len(coins) < 1:
        return 1

    coins = sorted(coins)
    min_change = 0

    for coin in coins:
        if coin > min_change + 1:
            return min_change + 1
        else:
            min_change += coin
    return min_change + 1


print(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
