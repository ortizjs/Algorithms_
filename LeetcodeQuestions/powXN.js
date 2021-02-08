var myPow = function (x, n, memo = {}) {
    if (n in memo) return memo[n]
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n < 0) {
        n *= -1
        var inverse = true;
    }
    let low = Math.floor(n / 2);
    let high = Math.ceil(n / 2);
    memo[low] = myPow(x, low, memo);
    memo[high] = myPow(x, high, memo);
    let answer = myPow(x, low, memo) * myPow(x, high, memo)
    return inverse === true ? 1 / answer : answer
};

console.log(myPow(2, 3))
console.log(myPow(2, 5))
console.log(myPow(2, -3))
console.log(myPow(2.00, 10))