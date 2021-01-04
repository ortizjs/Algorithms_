# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
    return nil if l1 == nil && l2 == nil
    if l1 == nil
        return l2
    elsif l2 == nil
        return l1
    end
        
    node_one = l1
    node_two = l2
    new_list = nil
    
    if node_one.val <= node_two.val
        new_list = node_one
        node_one = node_one.next
    else
        new_list = node_two
        node_two = node_two.next
    end
    new_head = new_list
    # new_list = new_list.next
    
  
    while node_one != nil && node_two != nil
        if node_one.val <= node_two.val
            new_list.next = node_one
            node_one = node_one.next
        else
            new_list.next = node_two
            node_two = node_two.next
        end
        new_list = new_list.next
    end
    
    while node_one != nil
        new_list.next = node_one
        new_list = new_list.next
        node_one = node_one.next
    end
    
    while node_two != nil
        new_list.next = node_two
        new_list = new_list.next
        node_two = node_two.next
    end
    new_head
end