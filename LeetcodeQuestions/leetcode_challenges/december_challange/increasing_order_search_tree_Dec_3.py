# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def increasingBST(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        stack = []
        head = None
        current = None

        while root is not None:
            stack.append(root)
            root = root.left
        
        while stack:
            node = stack.pop()
            if not head:
                head = TreeNode(node.val)
                current = head
            else:
                current.right = TreeNode(node.val)
                current = current.right
            
            if node.right:
                stack.append(node.right)
                node = node.right

                while node.left:
                    stack.append(node.left)
                    node = node.left
        return head