var groupAnagrams = function(strs) {
    let res = [];
    let map = {};
    for (let word of strs) {
        let sorted = sortWord(word);
        if (map[sorted] === undefined) {
            map[sorted] = []
        }
        map[sorted].push(word)
    }
    
    for (let word in map) {
        res.push(map[word])
    }
    return res;
};

function sortWord(word) {
    return word.split("").sort().join("")
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["eat"]));