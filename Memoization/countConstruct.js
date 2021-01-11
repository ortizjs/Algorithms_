// Brute force time complexity: time: O(m * n^m), time: O(m^2)
// memoized solution time: O(n * m^2), space: O(m^2)

function countConstruct(target, words, memo = {}) {
    if (target in memo) return memo[target];
    if (target === "") return 1;
    let counter = 0;

    for (let word of words) {
        if (target.indexOf(word) === 0) {
            let suffix = target.slice(word.length);
            counter += countConstruct(suffix, words, memo);
            memo[target] = counter;
        }
    }

    memo[target] = counter;
    return counter

}

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]))
console.log(countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
console.log(countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]))