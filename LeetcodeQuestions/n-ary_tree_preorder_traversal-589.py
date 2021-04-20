"""
# Definition for a Node.
class Node(object):
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""

class Solution(object):
    def preorder(self, root):
        """
        :type root: Node
        :rtype: List[int]
        """
        if root == None:
            return None
        stack = [root]
        res = []

        while len(stack) > 0:
            node = stack.pop()
            if node is None:
                next
            res.append(node.val)
            if len(node.children) > 0:
                i = len(node.children) - 1
                while i >= 0:
                    child = node.children[i]
                    stack.append(child)
                    i -= 1
        return res