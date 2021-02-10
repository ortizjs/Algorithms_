// function minDistance(word1, word2, memo = {}) {
//     if (word1 + word2 in memo) return memo[word1 + word2];
//     if (!word1.length && !word2.length) return 0;
//     if (!word1.length || !word2.length) {
//         return Math.max(word1.length, word2.length);
//     }
//     let n = word1.length - 1;
//     let m = word2.length - 1;

//     let count = 0;

//     if (word1[n] === word2[m]) {
//         count += minDistance(word1.slice(0, n), word2.slice(0, m), memo);
//     } else {
//         count += 1 + Math.min(
//             minDistance(word1.slice(0, n), word2.slice(0, m), memo),
//             minDistance(word1.slice(0, n), word2, memo),
//             minDistance(word1, word2.slice(0, m), memo)
//         )
//     }
//     memo[word1 + word2] = count;
//     return memo[word1 + word2];
// }

function minDistance(word1, word2) {
    let table = Array(word1.length).fill().map(() => Array(word2.length).fill(0))
    return minDistanceHelper(word1, word2, word1.length - 1, word2.length - 1, table)
}

function minDistanceHelper(word1, word2, i, j, table) {
    if (i < 0 && j < 0) return 0;
    // if (!word1) return word2.length;
    // if (!word2) return word1.length;
    if (i < 0) return j + 1;
    if (j < 0) return i + 1;
    if (table[i][j] !== 0) return table[i][j];

    if (word1[i] === word2[j]) {
        table[i][j] = minDistanceHelper(word1, word2, i - 1, j - 1, table);
    } else {
        table[i][j] = 1 + Math.min(minDistanceHelper(word1, word2, i - 1, j - 1, table),
            Math.min(minDistanceHelper(word1, word2, i - 1, j, table), minDistanceHelper(word1, word2, i, j - 1, table)))
    }
    return table[i][j]
}

console.log(minDistance("horse", "ros"))
console.log(minDistance("intention", "execution"))