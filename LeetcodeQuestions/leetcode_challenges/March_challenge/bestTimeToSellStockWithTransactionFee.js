function maxProfit(prices, fee) {
    if (prices.length < 2) return 0
    let buyPrice = prices[0];
    let totalProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let currentPrice = prices[i];
        if (currentPrice < buyPrice) {
            buyPrice = currentPrice
        } else if (currentPrice > buyPrice + fee) {
            totalProfit += currentPrice - buyPrice - fee;
            buyPrice = currentPrice - fee;
        }
    }
    return totalProfit
}

console.log(maxProfit([1, 3, 2, 8, 4, 9], 2))
console.log(maxProfit([1, 3, 7, 5, 10, 3], 3))