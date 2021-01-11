// time: O(m * n), space: O(m * n)
function gridTraveler(m, n) {
    // let table = new Array(m + 1).fill(new Array(n + 1).fill(0)) --> will not work as expected.
    let table = Array.from({ "length": m + 1 }, () => Array.from({ "length": n + 1 }, () => 0))
    table[1][1] = 1
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            let current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 2))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(18, 18))