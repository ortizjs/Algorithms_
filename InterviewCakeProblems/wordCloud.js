class wordCloud{
    constructor(input){
        this.input = input;
        this.punctuations = new Set([",", ".", "!", "?", "-", "/", "'", ":", ";"])
        this.capitals = "ABCDEFGHIJKMLNOPQRSTUVWXYZ";
        this.wordCloudHash = {};
    }

    isChar(char) {
        return "abcdefghijkmlnopqrstuvwxyzABCDEFGHIJKMLNOPQRSTUVWXYZ".indexOf(char) >= 0
    }

    splitwords(input) {
        let wordStartIdx = 0;
        let wordLength = 0;
        let words = []

        for (let i = 0; i < input.length; i++) {
            let currentChar = input[i];
            if (this.isChar(currentChar)) {
                if (wordLength === 0) {
                    wordStartIdx = i;
                }
                wordLength++;
            } else {
                let word = input.slice(wordStartIdx, wordStartIdx + wordLength);
                words.push(word)
                wordLength = 0;
            }
        }
        return words;
    }


    addWordsToHash(word) {
        if (this.wordCloudHash[word] != undefined) {
            this.wordCloudHash[word]++;
        } else {
            this.wordCloudHash[word] = 1;
        }
    }
}
    
//     let start, end = 0;

//     for (let i = 0; i < input.length; i++) {
//         let currentChar = input[i];
//         let word;
//         if (currentChar === " ") {
//             // end = i;
//             word = input.slice(start, i);
//             wordCloudChecker(word, wordCloudHash);
//             start = i + 1;
//         } else if (punctuations.has(currentChar)) {
//             // end = i
//             word = input.slice(start, i);
//             wordCloudChecker(word, wordCloudHash);
//             start = i + 2;
//         }
//     }
//     return wordCloudHash;

// }

// function wordCloudChecker(word, hash) {
//     let capitals = "ABCDEFGHIJKMLNOPQRSTUVWXYZ";
//     if (capitals.indexOf(word[0]) != -1) {
//         if (hash[word] != undefined) {
//             hash[word] += 1;
//         } else if (hash[word.toLowerCase()] != undefined) {
//             hash[word] = hash[word.toLowerCase()] + 1;
//             delete hash[word.toLowerCase()];
//         } 
//         else {
//             hash[word] = 1;
//         }
    
//     } else if (hash[word[0] + word.slice(1, word.length)] != undefined) {
//         hash[word[0] + word.slice(1,word.length)] += 1
//     } else if (hash[word.toLowerCase()] != undefined) {
//         hash[word] += 1;
//     } else if (hash[word] != undefined) {
//         hash[word] += 1;
//     } else {
//         hash[word] = 1;
//     }
// }

let input1 = "After beating the eggs, Dana read the next step:"
let input2 = "Add milk and eggs, then add flour and sugar."
console.log(wordCloud(input1));
console.log(wordCloud(input2));