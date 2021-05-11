function validAbbreviation(word, abbr) {
    let num = "", i = 0;

    for (let char of abbr) {
        if (i >= word.length) return false;
        if (!isNaN(char)) {
            if (char === "0" && !num) return false;
            num += char;
        } else {
            if (num) i += parseInt(num);
            if (word[i] !== char) return false;
            i++;
            num = "";
        }
    }
    if (num) i += parseInt(num);
    return i === word.length;
}

console.log(validAbbreviation("internationalization", "i12iz4n"));
console.log(validAbbreviation("apple","a2e"));