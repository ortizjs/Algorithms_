class WordCloud {
    constructor(inputStr) {
        // this.inputStr = inputStr;
        this.cloud = {};
        this.splitWords(inputStr)
    }

    isCapitalized(word){
        return word[0] === word[0].toUpperCase()
    }

    lowerCase(word) {
        return word.toLowerCase()
    }

    capitalized(word) {
        return word[0].toUpperCase() + word.slice(1)
    }

    addWordToCloud(word) {
        // if (this.isCapitalized(word) && !(word in this.cloud)) {
        //     this.cloud[word] = 1;
        // } else if (this.capitalized(word) in this.cloud) {
        //     let wordCount = this.cloud[this.capitalized(word)]
        //     this.cloud[word] = wordCount + 1;
        //     delete this.cloud[this.capitalized(word)];
        // } else if (this.isCapitalized(word) && this.lowerCase(word) in this.cloud) {
        //     this.cloud[this.lowerCase(word)] += 1
        // } else {
        //     this.cloud[word] = 1
        // }
        if (word in this.cloud) {
            this.cloud[word] += 1
        } else if (this.lowerCase(word) in this.cloud) {
            this.cloud[this.lowerCase(word)] += 1
        } else if (this.capitalized(word) in this.cloud) {
            let count = this.cloud[this.capitalized(word)] + 1;
            this.cloud[word] = count;
            delete this.cloud[this.capitalized(word)];
        } else {
            this.cloud[word] = 1;
        }
    }

    isPunctuation(char) {
        return [",",".","?","!",":",";"].indexOf(char) != -1
    }

    isLetter(char) {
        return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) >= 0;
    }

    // splitWords(words) {
    //     let wordStart = 0;
    //     let wordLength = 0;
    //     let word;
    //     for (let i = 0; i < words.length; i++) {
    //         let currentChar = words[i];
    //         let wordEnd = wordStart + wordLength;
    //         if (currentChar === " " && i != words.length - 1) {
    //             word = words.slice(wordStart, wordEnd)
    //             this.addWordToCloud(word);
    //             wordStart = i + 1;
    //             wordLength = 0;
    //         } else if (currentChar === "." && words.slice(i, i + 3) === "..") {
    //             word = words.slice(wordStart, wordEnd)
    //             this.addWordToCloud(word)
    //             wordStart = i + 4;
    //             wordLength = 0;
    //         } else if (currentChar === "\'") {
    //             word = words.slice(wordStart, wordEnd);
    //             this.addWordToCloud(word);
    //             wordStart = i + 3;
    //             wordLength = 0;
    //         } else if (this.isPunctuation(currentChar)) {
    //             this.addWordToCloud(word);
    //             word = words.slice(wordStart, wordEnd + 1);
    //             wordStart = i + 2;
    //             wordLength + 0;
    //         } else {
    //             wordLength++;
    //         }
    //     }
    // }

    splitWords(words) {
        let wordStart = 0;
        let wordLength = 0
        for (let i = 0; i < words.length; i++) {
            let currentChar = words[i];
            if (i === words.length - 1) {
                if (this.isLetter(currentChar)) {
                    wordLength += 1
                }
                if (wordLength > 0) {
                    let word = words.slice(wordStart, wordStart + wordLength);
                    this.addWordToCloud(word);
                }
            } else if (currentChar === " " || currentChar === '\u2014') {
                if (wordLength > 0) {
                    let word = words.slice(wordStart, wordStart + wordLength);
                    this.addWordToCloud(word);
                    wordLength = 0;
                }
            } else if (currentChar === ".") {
                if (i < words.length - 1 && words[i + 1] === ".") {
                    if (wordLength > 0) {
                        let word = words.slice(wordStart, wordStart + wordLength);
                        this.addWordToCloud(word);
                        wordLength = 0;
                    }
                }
            } else if (this.isLetter(currentChar) || currentChar === "\'") {
                if (wordLength === 0 ) {
                    wordStart = i;
                }
                wordLength++;
            } else if (currentChar === "-") {
                if (i > 0 && this.isLetter(words[i - 1]) && this.isLetter(i + 1)) {
                    if (wordLength === 0) {
                        wordStart = i;
                    }
                    wordLength++;
                }
            } else {
                if (wordLength > 0) {
                    let word = words.slice(wordStart, wordStart + wordLength);
                    this.addWordToCloud(word);
                    wordLength = 0;
                }
            }
        }
    }
};

let inputOne = "After beating the eggs, Dana read the next step:";
let inputTwo = "Add milk and eggs, then add flour and sugar.";

let WC1 = new WordCloud(inputOne);
let WC2 = new WordCloud(inputTwo);

console.log(WC1);
console.log(WC2);