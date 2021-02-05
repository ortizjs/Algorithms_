class Solution(object):
    def simplifyPath(self, path):
        """
        :type path: str
        :rtype: str
        """
        chars = path.split("/")
        stack = []
        con_path = "/"
        special = set([".","..",""])
        for char in chars:
            if len(stack) and char == "..":
                stack.pop()
            elif char not in special:
                stack.append(char)
        con_path += "/".join(stack)
        return con_path