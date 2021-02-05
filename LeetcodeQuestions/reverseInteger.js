var reverse = function (x) {
    if (String(x).length === 1) return x
    let numChars = String(x);
    let newNum = ""
    for (let num of numChars) {
        newNum = num + newNum;
    }
    let numTwo = parseInt(newNum);
    if (newNum[newNum.length - 1] === "-") {
        numTwo *= -1
    }
    if (numTwo < -1 * (2 ** 31) || numTwo > 2 ** 31) {
        return 0
    }

    return numTwo
};

console.log(reverse(123))
console.log(reverse(-123))
console.log(reverse(120))
console.log(reverse(0))