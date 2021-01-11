// Brute force time: O(m * n^m), space: O(m)
// memoized time :(O) (m * n^m), space: O(m)
function allConstruct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return [[]];
    let results = [];

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            let suffixWays = allConstruct(suffix, words, memo)
            let targetWays = suffixWays.map((way) => [word, ...way]);
            results.push(...targetWays)
        }
    }
    memo[target] = results;
    return results;
}



console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]))