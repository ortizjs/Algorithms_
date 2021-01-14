function deletionDistance(str1, str2, memo = {}) {
    if (str1 + "-" + str2 in memo) return memo[str1 + "-" + str2]
    if (str1 === str2) return 0
    if (str1.length && !str2.length || !str1.length && str2.length) {
        return Math.max(str1.length, str2.length);
    }
    let m = str1.length - 1;
    let n = str2.length - 1;
    let count = 0
    if (str1[m] === str2[n]) {
        count += deletionDistance(str1.slice(0, m), str2.slice(0, n), memo)
    } else {
        count += 1 + Math.min(deletionDistance(str1.slice(0, m), str2), deletionDistance(str1, str2.slice(0, n), memo))
    }
    memo[str1 + "-" + str2] = count;
    return count;
}

console.log(deletionDistance("", ""))
console.log(deletionDistance("", "hit"))
console.log(deletionDistance("neat", ""))
console.log(deletionDistance("heat", "hit"))
console.log(deletionDistance("hot", "not"))
console.log(deletionDistance("some", "thing"))
console.log(deletionDistance("abc", "adbc"))
console.log(deletionDistance("awesome", "awesome"))
console.log(deletionDistance("ab", "ba"))