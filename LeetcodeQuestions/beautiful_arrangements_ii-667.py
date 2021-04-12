class Solution(object):
    def constructArray(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: List[int]
        """
        res = [None] * n
        low = 1
        high = n
        idx = 0
        is_high = False

        res[idx] = low
        idx += 1
        low += 1

        while k > 1:
            res[idx] = high
            idx += 1
            high -= 1
            k -= 1
            is_high = True

            if k > 1:
                res[idx] = low
                idx += 1
                low += 1
                k -= 1
                is_high = False

        while idx < n:
            if is_high:
                res[idx] = high
                high -= 1
            else:
                res[idx] = low
                low += 1
            idx += 1
        return res
