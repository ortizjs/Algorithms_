var divide = function (dividend, divisor) {
    if (dividend === 0) return 0;

    if (divisor === -1 && dividend < 0) {
        if (dividend <= Math.pow(-2, 31)) {
            return -1 + Math.abs(Math.pow(-2, 31))
        }
        return Math.abs(dividend)
    } else if (divisor === 1) {
        return dividend
    }

    let counter = 0;
    let absDividend = Math.abs(dividend)
    let absDivisor = Math.abs(divisor)
    while (absDividend >= absDivisor) {
        absDividend -= absDivisor
        counter++
    }
    if (divisor < 0 && dividend > 0 || divisor > 0 && dividend < 0) {
        return -counter
    }
    return counter
};

console.log(divide(10, 3))
console.log(divide(7, -3))
console.log(divide(0, 1))
console.log(divide(1, 1))
console.log(divide(-2147483648, -1))