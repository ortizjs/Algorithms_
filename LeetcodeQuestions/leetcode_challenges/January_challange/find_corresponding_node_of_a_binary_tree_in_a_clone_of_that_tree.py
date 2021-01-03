class Solution:

    def traverseTree(self, original, cloned, target):
        if original:
            if original.left is not None:
                self.traverseTree(original.left, cloned.left, target)

            if original is target:
                self.answer = cloned

            if original.right is not None:
                self.traverseTree(original.right, cloned.right, target)

    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:
        self.traverseTree(original, cloned, target)
        return self.answer
