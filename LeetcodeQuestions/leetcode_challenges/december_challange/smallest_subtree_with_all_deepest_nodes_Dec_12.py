# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:

    def findDepth(self, root):
        if not root:
            return [root, 0]
        left = self.findDepth(root.left)
        right = self.findDepth(root.right)

        if left[1] == right[1]:
            return [root, left[1] + 1]
        elif left[1] > right[1]:
            return [left[0], left[1] + 1]
        else:
            return [right[0], right[1] + 1]


    def subTreeWithAllDeepest(self, root):
        return self.findDepth(root)[0]