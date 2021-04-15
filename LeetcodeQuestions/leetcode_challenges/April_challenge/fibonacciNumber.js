var fib = function(n, memo= {}) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (n in memo) return memo[n];
    
    let num = fib(n - 1, memo) + fib(n - 2, memo)
    memo[n] = num;
    return num;
};

console.log(fib(0))
console.log(fib(1))
console.log(fib(2))
console.log(fib(10))