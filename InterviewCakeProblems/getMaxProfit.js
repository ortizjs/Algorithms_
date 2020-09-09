function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        throw new Error("Getting a profit requires at least 2 prices...")
    }
    let minPrice = stockPrices[0];
    let totalProfit = stockPrices[1] - stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i];
        let currentProfit = currentPrice - minPrice;
        totalProfit = Math.max(currentProfit, totalProfit)
        minPrice = Math.min(currentPrice, minPrice)
    }
    return totalProfit
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]))
console.log(getMaxProfit([10, 9, 7, 5, 3, 1]))
console.log(getMaxProfit([10]))