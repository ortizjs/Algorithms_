function coinChange(coins, amount) {
    let table = Array.from({ "length": amount + 1 }, () => null);
    table[0] = [];
    // console.log(table)

    for (let i = 0; i <= amount; i++) {
        if (table[i] !== null) {
            for (let coin of coins) {
                let prevArr = table[i]
                let newArr = [...prevArr, coin]
                if (!table[i + coin] || table[i + coin].length > newArr.length) {
                    table[i + coin] = newArr
                }
            }
        }
    }
    let ans = table[amount] === null ? -1 : table[amount].length
    return ans
}

console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))
console.log(coinChange([1, 2, 5], 100))
console.log(coinChange([1, 2, 5, 25], 100))
console.log(coinChange([1, 2, 5, 25, 75], 100))