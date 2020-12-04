def kthFactor(self, n: int, k: int) -> int:
      counter = 0

       for i in range(1, (n//2) + 1):

            if n % i == 0:
                counter += 1
                if counter == k:
                    return i
        if counter + 1 == k:
            return n
        return -1
