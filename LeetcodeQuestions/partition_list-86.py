# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def partition(self, head, x):
        """
        :type head: ListNode
        :type x: int
        :rtype: ListNode
        """
        if head is None:
            return None
        before_head = ListNode(0)
        before_pointer = before_head
        after_head = ListNode(0)
        after_pointer = after_head

        while head is not None:
            if head.val < x:
                before_pointer.next = head
                before_pointer = before_pointer.next
            else:
                after_pointer.next = head
                after_pointer = after_pointer.next
            head = head.next

        after_pointer.next = None
        before_pointer.next = after_head.next
        return before_head.next
