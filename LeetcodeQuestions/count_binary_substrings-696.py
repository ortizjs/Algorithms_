lass Solution(object):
    def countBinarySubstrings(self, s):
        """
        :type s: str
        :rtype: int
        """
        counter = 0
        prev_block = 0
        curr_block = 1
        current = s[0]

        for i in range(1, len(s)):
            if current == s[i]:
                curr_block += 1
            else:
                counter += min(prev_block, curr_block)
                prev_block = curr_block
                curr_block = 1
            current = s[i]

        counter += min(prev_block, curr_block)

        return counter
