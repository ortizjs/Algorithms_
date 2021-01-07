function gridTraveler(rows, cols, memo = {}) {
    if (`${rows}, ${cols}` in memo || `${cols}, ${rows}` in memo) {
        return memo[`${rows}, ${cols}`]
    }
    if (rows === 0 || cols === 0) return 0;
    if (rows === 1 || cols === 1) return 1;

    memo[`${rows}, ${cols}`] = gridTraveler(rows - 1, cols, memo) + gridTraveler(rows, cols - 1, memo)
    memo[`${cols}, ${rows}`] = gridTraveler(rows, cols - 1, memo) + gridTraveler(rows - 1, cols, memo)
    return memo[`${rows}, ${cols}`]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(4, 4))
console.log(gridTraveler(18, 18))