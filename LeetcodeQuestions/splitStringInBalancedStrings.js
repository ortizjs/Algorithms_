function balancedStringSplit(s) {
    let total = 0;
    let counter = 0;

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === "L") {
            counter++;
        } else {
            counter--;
        }
        if (counter == 0) {
            total++
        }
    }
    return total;
}

console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("RLLLLRRRLR"))