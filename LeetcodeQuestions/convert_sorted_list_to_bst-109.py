# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.

class TreeNode(object):
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution(object):
    def sortedListToBST(self, head):
        """
        :type head: ListNode
        :rtype: TreeNode
        """
        if not head:
            return None
        values = self.listToArr(head)
        return self.constructBST(values)

    def listToArr(self, head):
        if not head:
            return None
        values = []

        while head is not None:
            values.append(head.val)
            head = head.next
        return values

    def constructBST(self, values):
        if not values:
            return None
        mid_idx = (len(values) / 2)
        mid_val = values[mid_idx]
        left_sub = values[0:mid_idx]
        right_sub = values[mid_idx + 1:]

        root = TreeNode(mid_val)
        root.left = self.constructBST(left_sub)
        root.right = self.constructBST(right_sub)
        return root
