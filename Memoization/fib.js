function fib(num, memo = {}) {
    if (num in memo) return memo[num]
    if (num <= 2) return 1;
    memo[num] = fib(num - 2, memo) + fib(num - 1, memo)
    return memo[num]
}

console.log(fib(3))
console.log(fib(8))
console.log(fib(9))
console.log(fib(50))
console.log(fib(500))
console.log(fib(12319))

/*
1, 1, 2, 3, 5, 8

fib(3)
*/