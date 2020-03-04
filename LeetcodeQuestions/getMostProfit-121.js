function getMostProfit(prices){
    let profit = 0;
    let buyVal = prices[0];
    let sellVal;
    let i = 1;
    while (i < prices.length){
        let current = prices[i];
        let currentProfit = current - buyVal;
        if (currentProfit > profit) {
            profit = currentProfit;
            sellVal = current;
        }
        if (current < buyVal) buyVal = current;
        i++;
    }
    return profit;
    // let profit = 0;
    // let min;
    // let max;
    // for (let i = 0; i < prices.length; i++) {
    //     let cB = prices[i];
    //     for (let j = i + 1; j < prices.length; j++){
    //         let sell = prices[j];
    //         if (sell - cB >= profit) {
    //             profit = sell - cB;
    //             min = cB;
    //             max = sell;
    //         }
    //     }
    // }
    // return profit;
    
}

console.log(getMostProfit([10, 7, 5, 8, 11, 9]));
console.log(getMostProfit([10, 17, 55, 888, 11, 90]));
console.log(getMostProfit([4, 7, 10, 1000, 1, 8, 9, 1]));
console.log(getMostProfit([1, 2]));