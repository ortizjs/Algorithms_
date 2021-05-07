function minDistance(word1, word2, memo) {
    if (`${word1}-${word2}` in memo) return memo[`${word1}-${word2}`];
    if (word1 === word2) return 0;
    if (word1.length && !word2.length || !word1.length && word2.length) {
        return Math.max(word1.length, word2.length);
    }

    let m = word1.length - 1;
    let n = word2.length - 1;
    let count = 0;

    if (word1[m] === word2[n]) {
        count += minDistance(word1.slice(0,m), word2.slice(0,n), memo);
    } else {
        count += 1 + Math.min(minDistance(word1.slice(0,m), word2, memo), minDistance(word1, word2.slice(0,n), memo))
    }
    memo[`${word1}-${word2}`] = count;
    return count
}