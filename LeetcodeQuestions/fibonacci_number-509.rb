def fib(n, memo={})
    return 0 if n == 0
    return 1 if n == 1
    return memo[n] if memo.has_key?(n)
    num = fib(n - 1, memo) + fib(n - 2, memo)
    memo[n] = num
    return num
end

puts fib(0)
puts fib(1)
puts fib(2)
puts fib(10)