var getMaximumGenerated = function (n) {


    let table = [0, 1]
    let max = 0;
    let i = 1
    if (n === 0) return table[0];
    while (table.length < n) {
        table[2 * i] = table[i]
        table[2 * i + 1] = table[i] + table[i + 1]
        i++
    }
    max = table.reduce((a, b) => {
        return Math.max(a, b)
    })

    return max
};