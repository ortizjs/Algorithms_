class wordCloud{
    constructor(input){
        this.wordCloudHash = {};
        this.splitwords(input)
    }

    isChar(char) {
        return "abcdefghijkmlnopqrstuvwxyzABCDEFGHIJKMLNOPQRSTUVWXYZ".indexOf(char) >= 0
    }

    splitwords(input) {
        let wordStartIdx = 0;
        let wordLength = 0;

        for (let i = 0; i < input.length; i++) {
            let currentChar = input[i];
            if (i === input.length - 1) {
                if (this.isChar(currentChar)) {
                    wordLength += 1;
                }
                if (wordLength > 0) {
                    let word = input.slice(wordStartIdx, wordStartIdx + wordLength);
                    this.addWordsToHash(word);
                }
            } else if (currentChar === " " || currentChar === "—") { 
                if (wordLength > 0) {
                    let word = input.slice(wordStartIdx, wordStartIdx + wordLength);
                    this.addWordsToHash(word);
                    wordLength = 0
                }
            } else if (currentChar === ".") {
                if (i < input.length - 1 && input[i + 1] === ".") {
                    if (wordLength > 0) {
                        let word = input.slice(wordStartIdx, wordStartIdx + wordLength);
                        this.addWordsToHash(word);
                        wordLength = 0;
                    }
                }
            } else if (this.isChar(currentChar) || currentChar === "\'") {
                if (wordLength === 0) {
                    wordStartIdx = i;
                }
                wordLength += 1;
            } else if (currentChar === "-") {
                if (i > 0 && this.isChar(input[i + 1])) {
                    if (wordLength === 0) {
                        wordStartIdx = i
                    }
                    wordLength += 1;
                }
            } else {
                if (wordLength > 0) {
                    let word = input.slice(wordStartIdx, wordStartIdx + wordLength);
                    this.addWordsToHash(word);
                    wordLength = 0;
                }
            }
        }
    }


    addWordsToHash(word) {
        let newCount;

        if (word in this.wordCloudHash) {
            newCount = this.wordCloudHash[word] + 1;
            this.wordCloudHash[word] = newCount;
        } else if (word.toLowerCase() in this.wordCloudHash) {
            newCount = this.wordCloudHash[word] + 1;
            this.wordCloudHash[word] = newCount;
        } else if (this.capitalize(word) in this.wordCloudHash) {
            newCount = this.wordCloudHash[this.capitalize(word)] + 1;
            this.wordCloudHash[word] = newCount;
            delete this.wordCloudHash[this.capitalize(word)];
        } else {
            this.wordCloudHash[word] = 1;
        }
    }
    
    capitalize(word) {
        return word[0].toUpperCase() + word.slice(1);
    }

}
    


let input1 = "After beating the eggs, Dana read the next step:"
let input2 = "Add milk and eggs, then add flour and sugar."
newWordCloud = new wordCloud(input1);
newWordCloud2 = new wordCloud(input2);
console.log(newWordCloud);
console.log(newWordCloud2);