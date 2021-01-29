function coinChangeMemo(coins, amount, memo = {}) {
    if (amount in memo) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return -1;

    let numCoins = [];

    for (let coin of coins) {
        let remainderRes = coinChangeMemo(coins, amount - coin, memo);
        if (remainderRes !== -1) {
            numCoins.push(remainderRes + 1);
        }
    }

    let res = Math.min(...numCoins);
    memo[amount] = res === Infinity ? -1 : res;
    return memo[amount]
}

console.log(coinChangeMemo([1, 2, 5], 11))
console.log(coinChangeMemo([2], 3))
console.log(coinChangeMemo([1, 2, 5], 100))
console.log(coinChangeMemo([1, 2, 5, 25], 100))
console.log(coinChangeMemo([1, 2, 5, 25, 75], 100))