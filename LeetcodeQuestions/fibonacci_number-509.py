class Solution(object):
    def fib(self, n, memo={}):
        """
        :type n: int
        :rtype: int
        """
        if n == 0:
            return 0
        if n == 1:
            return 1
        if n in memo:
            return memo[n]
        num = self.fib(n - 1, memo) + self.fib(n - 2, memo)
        memo[n] = num
        return num
