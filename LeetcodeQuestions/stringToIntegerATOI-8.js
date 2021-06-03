function myAtoi(s){
    let lower = -Math.pow(2,31)
    let upper = Math.pow(2,31) - 1;
    let num = parseInt(s, 10);
    if (isNaN(num)) return 0;
    if (num <= lower) return lower;
    if (num >= upper) return upper;
    return num;
}

console.log(myAtoi("42"))
console.log(myAtoi("-42"))
console.log(myAtoi("    -42"))
console.log(myAtoi("4193"))
console.log(myAtoi("words and 987"))
console.log(myAtoi("-91283472332"))