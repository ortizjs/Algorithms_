function decryptMessage(letters) {
    let message = "";
    if (!letters.length) {
        return message;
    }
    let codedLetters = []
    let chars = letters.split("")
    chars.forEach(char => {
        codedLetters.push(char.charCodeAt(0))
    })
    let prevCode = codedLetters[0];
    message += String.fromCharCode(prevCode - 1);
    for (let i = 1; i < codedLetters.length; i++) {
        let current = codedLetters[i] - prevCode;
        while (current < 97) {
            current += 26;
        }
        prevCode = codedLetters[i];
        message += String.fromCharCode(current);
    }
    return message
}

console.log(decryptMessage("dnotq"));
console.log(decryptMessage("flgxswdliefy"));
console.log(decryptMessage("rajsb"));
console.log(decryptMessage("bvqmjhgghjmqvbiqzjugthwmdv"));
console.log(decryptMessage("eobamwpnlmhklrq"));
console.log(decryptMessage(""));
