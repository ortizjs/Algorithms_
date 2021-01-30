function coinChange(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let numCoins = [];

    for (let coin of coins) {
        let remainder = amount - coin;
        let remainderRes = coinChange(coins, remainder, memo);
        if (remainderRes !== -1) {
            numCoins.push(remainderRes + 1);
        }
    }

    let res = Math.min(...numCoins);
    res === Infinity ? memo[amount] = -1 : memo[amount] = res;
    return memo[amount];
}


console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1, 2, 5], 100))
console.log(coinChange([1, 2, 5, 25], 100))
console.log(coinChange([1, 2, 5, 25, 75], 100))