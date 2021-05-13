var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = prices[0]; 
    for (let i = 1; i < prices.length; i++) {
        
        let sell = prices[i];
        let currProfit = sell - buy;
        maxProfit = Math.max(maxProfit, currProfit);
        buy = Math.min(buy, sell);
    }
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))