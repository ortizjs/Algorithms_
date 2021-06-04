/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    if (s.length === 1) return roman[s];

    let chars = s.split("");
    let n = chars.length;

    let counter = 0;
    let i = 0;

    while (i < n) {
        let char = chars[i]
        if (char === "I" && (chars[i + 1] === "V" || chars[i + 1] === "X")) {
            counter += roman[chars[i + 1]] - roman[char];
            i += 2;
        } else if (char === "X" && (chars[i + 1] === "L" || chars[i + 1] === "C")) {
            counter += roman[chars[i + 1]] - roman[char];
            i += 2
        } else if (char === "C" && (chars[i + 1] === "D" || chars[i + 1] === "M")) {
            counter += roman[chars[i + 1]] - roman[char];
            i += 2
        } else {
            counter += roman[char]
            i++;
        }
    }
    return counter;
};

function romanToInt3(s) {
    let bases = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 };
    let n = s.length - 1;
    let i = n - 1;
    let sum = bases[s[n]];

    while (i >= 0) {
        if (bases[s[i]] < bases[s[i + 1]]) {
            sum -= bases[s[i]];
        } else {
            sum += bases[s[i]]
        }
        i--;
    }
    return sum;
}


var romanToInt2 = function (s) {
    let bases = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    let subs = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900
    }

    let counter = 0;


    for (let i = 0; i < s.length; i++) {
        let num = s[i];
        let nums = s.slice(i, i + 2);

        if (!subs[nums]) {
            counter += bases[num]
        } else {
            counter += subs[nums];
            i++;
        }
    }
    return counter;
};



console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))

console.log(romanToInt2("III"))
console.log(romanToInt2("IV"))
console.log(romanToInt2("IX"))
console.log(romanToInt2("LVIII"))
console.log(romanToInt2("MCMXCIV"))

console.log(romanToInt3("III"))
console.log(romanToInt3("IV"))
console.log(romanToInt3("IX"))
console.log(romanToInt3("LVIII"))
console.log(romanToInt3("MCMXCIV"))
/*
As we are iterating over the chars, for every char that is either:
    - I: we can check if the next char is V or X and if so, return either 4 or 9
    - X: we can check if the next char is L or X and if so, return either 40 or 90
    - C: we can check if the next char is D or M and if so, return 400 or 900
if it is not one of these then can just add its respective value to the counter;

example 1)
input: "III"
chars = ["I","I","I"]
counter = 0
char = "I", next char = "I" so we just add 1 = 1
char = "I", next char = "I" so we just add 1 = 2
char = "i", next char is out of bounds so we just add 1 = 3;
return counter;

example 2)
input: "IV"
chars = ["I","V"]
counter = 0
char = "I", next = "V" so we add 4 instead = 4
char = "V", next is out of bounds so we return since we aleady counted the 5 in the subtraction;

example 3)
input: "IX"
chars = ["I", "x"]
counter = 0
char = "I", next = "X" so we perform subtraction roman[char] - roman[next] = 9 and return

example 4)
input: "LVIII"
chars = ["L", "V", "I", "I","I"]
counter = 0
char = "L" not a special char so we just add its value of 50 = 50
char = "V", not a special char so we just add its value of 5 = 55
char = "I", special char so we check next, next = "I" so we just add its normal val of 1 = 56
char = "I", special char so we check next, next = "I" so we just add its normal val of 1 = 57
char = "I", special char so we check next, next is out of bounds so we just add its normal val of 1 = 58 and return since we are at end of input"


example 5)
input: "MCMXCIV"
chars = ["M","C","M","X","C","I","V"]
counter = 0;
char = "M" not a special char so add its value of 1000 = 1000
char = "C", special char so check next, next = "M", so need to do subtraction of roman[char] - roman[next] total 900 = 1900
char = "X", special char so check next, next = "C", so need to subtract, roman[char] - roman[next] total of 90 = 1990
char = "I", special char so we check next, next = "V" so need to subtract roman[char] - roman[next] total of 4 = 1994
we are at end of input so return counter

*/