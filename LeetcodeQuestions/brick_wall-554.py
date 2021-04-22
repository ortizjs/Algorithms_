class Solution(object):
    def leastBricks(self, wall):
        """
        :type wall: List[List[int]]
        :rtype: int
        """
        max_bricks = 0
        counts = {}

        n = len(wall)

        for row in wall:
            sum = 0
            i = 0
            while i < len(row) - 1:
                sum += row[i]
                if i < len(row):
                    if sum not in counts:
                        counts[sum] = 0
                    counts[sum] += 1
                    max_bricks = max(max_bricks, counts[sum])
                i += 1
        return n - max_bricks
