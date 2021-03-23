function devowel(word) {
    let newWord = ""
    let vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"])
    for (let char of word) {
        if (vowels.has(char)) {
            newWord += "*"
        } else {
            newWord += char
        }
    }
    return newWord;
}

var spellchecker = function (wordlist, queries) {
    let words = [];
    let wordSet = new Set([]);
    let caseIn = new Map();
    let consonants = new Map();

    for (let word of wordlist) {
        let lowerCaseWord = word.toLowerCase()
        wordSet.add(word)
        if (!caseIn.has(lowerCaseWord)) {
            caseIn.set(lowerCaseWord, word);
        }
        if (!consonants.has(devowel(lowerCaseWord))) {
            consonants.set(devowel(lowerCaseWord), word);
        }
    }

    for (let word of queries) {
        let lowerCaseWord = word.toLowerCase()
        if (wordSet.has(word)) {
            words.push(word)
        } else if (caseIn.has(lowerCaseWord)) {
            words.push(caseIn.get(lowerCaseWord))
        } else if (consonants.has(devowel(lowerCaseWord))) {
            words.push(consonants.get(devowel(lowerCaseWord)));
        } else {
            words.push("")
        }
    }
    console.log(consonants)
    return words;
};

let wordlist = ["KiTe", "kite", "hare", "Hare"]
let queries = ["kite", "Kite", "KiTe", "Hare", "HARE", "Hear", "hear", "keti", "keet", "keto"]
console.log(spellchecker(wordlist, queries))