function reverseChars(message, start, end) {

    while (start < end) {
        let temp = message[start];
        message[start] = message[end];
        message[end] = temp;
        start++;
        end--;
    }
    return message;
}

function reverseWords(message) {
    message = reverseChars(message, 0, message.length - 1);

    let startIdx = 0;

    for (let i = 0; i <= message.length; i++) {
        if (message[i] === " " || i === message.length) {
            reverseChars(message, startIdx, i - 1);
            startIdx = i + 1;
        }
    }
    return message.join(" ")
}

function reverseWords2(message) {
    let new_input = message.join("");
    let new_input_2 = new_input.split(" ");
    let start = 0;
    let end = new_input_2.length - 1;
    while (start < end) {
        let temp = new_input_2[start];
        new_input_2[start] = new_input_2[end];
        new_input_2[end] = temp;
        start++;
        end--;
    }
    return new_input_2.join(" ")
}


console.log(reverseWords(['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l']))
console.log(reverseWords(['t', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
    'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd']))

console.log(reverseWords2(['c', 'a', 'k', 'e', ' ',
    'p', 'o', 'u', 'n', 'd', ' ',
    's', 't', 'e', 'a', 'l']))
console.log(reverseWords2(['t', 'h', 'e', ' ', 'e', 'a', 'g', 'l', 'e', ' ',
    'h', 'a', 's', ' ', 'l', 'a', 'n', 'd', 'e', 'd']))