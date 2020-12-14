class Solution:
    ## Solution not fully working. Just a pin point

    def getMaxCoins(self, balloons_left):
        if not balloons_left:
            return 0

        if len(balloons_left) <= 2:
            mid_idx = 0
        elif balloons_left[0] >= balloons_left[1]:
            mid_idx = int(math.floor((len(balloons_left)-1)/2))
        else:
            mid_idx = int(math.floor(len(balloons_left) / 2))

        left = 1 if mid_idx < 1 else balloons_left[mid_idx - 1]
        right = 1 if mid_idx == len(
            balloons_left) - 1 else balloons_left[mid_idx + 1]

        coins = left * balloons_left[mid_idx] * right

        coins += self.getMaxCoins(balloons_left[:mid_idx] +
                                  balloons_left[mid_idx + 1:])

        return coins

    def maxCoins(self, nums: List[int]) -> int:
        return self.getMaxCoins(nums)
