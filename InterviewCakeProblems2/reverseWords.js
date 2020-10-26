function reverseWords(message) {
    if (message.length < 2) {
        throw new Error("Message must contain at least 2 letters to be reversed!")
    }

    reverseStringInPlace(message, 0, message.length - 1);
    let startIdx = 0;

    for (let i = 0; i <= message.length; i++) {
        let currentChar = message[i];
        if (currentChar === " " || i === message.length) {
            reverseStringInPlace(message, startIdx, i - 1)
            startIdx = i + 1;
        }
    }
    return message.join(" ")
}

function reverseStringInPlace(chars, startIdx, endIdx) {

    while (startIdx < endIdx) {
        let temp = chars[startIdx];
        chars[startIdx] = chars[endIdx];
        chars[endIdx] = temp;
        startIdx++;
        endIdx--;
    }
}

const message = ['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l'];


let temp = ['l','a','e','t','s',' ','d','n','u','o','p',' ','e','k','a','c']
console.log(reverseWords(message));