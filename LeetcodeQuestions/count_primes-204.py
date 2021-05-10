class Solution(object):
    def countPrimes(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = 0
        primes = [False] * n

        for i in range(2, len(primes)):
            if primes[i] == False:
                j = i
                while j * i < len(primes):
                    k = i * j
                    primes[k] = True
                    j += 1
        # print(primes)
        for i in range(2, len(primes)):
            if primes[i] == False:
                count += 1
        return count
