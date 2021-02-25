function nonConstructibleChange(coins) {
    coins = coins.sort((a, b) => a - b);
    let minChange = 0;

    for (let coin of coins) {
        if (coin > minChange + 1) {
            return minChange + 1;
        } else {
            minChange += coin;
        }
    }
    return minChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]))
