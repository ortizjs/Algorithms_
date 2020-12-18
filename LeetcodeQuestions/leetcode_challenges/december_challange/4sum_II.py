class Solution:
    def fourSumCount(self, A: List[int], B: List[int], C: List[int], D: List[int]) -> int:
        counter = 0
        pairs = {}

        for a in A:
            for b in B:
                sum = a + b
                # if pairs.has_key(sum):
                if sum in pairs.keys():
                    pairs[sum] += 1
                else:
                    pairs[sum] = 1
        for c in C:
            for d in D:
                sum = c + d
                # if pairs.has_key(-sum):
                if -sum in pairs.keys():
                    counter += pairs[-sum]
        return counter

