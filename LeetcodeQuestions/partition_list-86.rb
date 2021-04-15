# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} head
# @param {Integer} x
# @return {ListNode}
def partition(head, x)
    return nil if (head == nil)
    
    before_head = ListNode.new(0)
    before_pointer = before_head
    after_head = ListNode.new(0)
    after_pointer = after_head
    
    while head != nil
        if head.val < x
            before_pointer.next = head
            before_pointer = before_pointer.next
        else
            after_pointer.next = head
            after_pointer = after_pointer.next
        end
        head = head.next
    end
    
    after_pointer.next = nil
    before_pointer.next = after_head.next
    return before_head.next
end