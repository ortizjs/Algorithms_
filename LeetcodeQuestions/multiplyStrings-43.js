function multiply(num1, num2) {
    let m = num1.length, n = num2.length;
    let vals = new Array(m + n).fill(0);

    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            let num = (num1.charAt(i) - "0") * (num2.charAt(j) - "0");
            let sum = vals[i + j + 1] + num;
            vals[i + j] += Math.floor(sum / 10);
            vals[i + j + 1] = sum % 10;
        }
    }

    let res = [];
    for (let val of vals) {
        if (res.length !== 0 || val !== 0) {
            res.push(val);
        }
    }

    return res.lenth === 0 ? "0" : res.join("");
}

console.log(multiply("3", "2"))
console.log(multiply("123", "456"))