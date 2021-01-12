// TIME: O(n^m), SPACE: O(n^m)
function allConstruct(target, words) {
    let table = new Array(target.length + 1).fill().map(ar => []);
    table[0] = [[]]
    for (let i = 0; i <= target.length; i++) {
        for (let word of words) {
            if (target.slice(i, i + word.length) === word) {
                //table[i]... will be either empty array or a 2 d array that represents the ways to construct the targetWord
                //if table[i] represents all the combinationsm, we need to map over them and copy all current combination and add current word ////that we are using.
                let newCombinations = table[i].map(subArr => [...subArr, word])
                table[i + word.length].push(...newCombinations);
            }
        }
    }
    return table[target.length]
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]))
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]))
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]))
// console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]))
console.log(allConstruct("aaaaaaaaaaz", ["a", "aa", "aaa", "aaaa", "aaaaa"]))
