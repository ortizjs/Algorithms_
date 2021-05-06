# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {ListNode} head
# @return {TreeNode}

def list_to_arr(root)
    return nil if root == nil
    values = []
    
    while root != nil
        values << root.val
        root = root.next
    end
    values
end


def constructBST(values)
    return nil if values.length == 0
    mid_idx = (values.length / 2).floor
    mid_val = values[mid_idx]
    root = TreeNode.new(mid_val)
    left_sub_tree = values.slice(0, mid_idx)
    right_sub_tree = values.slice(mid_idx + 1, values.length)
    root.left = constructBST(left_sub_tree)
    root.right = constructBST(right_sub_tree)
    return root
end


def sorted_list_to_bst(head)
    return nil if head == nil
    values = list_to_arr(head)
    return constructBST(values)
end