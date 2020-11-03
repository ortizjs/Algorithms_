function getMaxProfit(stockPrices) {
    if (stockPrices.length < 2) {
        throw new Error ("There must be at least two stocks")
    }
    let maxProfit = stockPrices[1] - stockPrices[0];
    let buyPrice = stockPrices[0];

    for (let i = 1; i < stockPrices.length; i++) {
        let currentPrice = stockPrices[i];
        let currentProfit = currentPrice - buyPrice;
        maxProfit = Math.max(currentProfit, maxProfit);
        buyPrice = Math.min(currentPrice, buyPrice);
    }
    return maxProfit;
};

const stockPrices = [10, 7, 5, 8, 11, 9];
const stockPrices2 = [10, 7, 5, 3, 2, 1];

console.log(getMaxProfit(stockPrices));
console.log(getMaxProfit(stockPrices2));