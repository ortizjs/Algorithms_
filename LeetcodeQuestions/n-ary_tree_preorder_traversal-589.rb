# Definition for a Node.
# class Node
#     attr_accessor :val, :children
#     def initialize(val)
#         @val = val
#         @children = []
#     end
# end

# @param {Node} root
# @return {List[int]}
def preorder(root)
    return [] if !root
    stack = [root]
    res = []
    
    while stack.length > 0
        node = stack.pop()
       
        if node.val == nil
            next
        end
        
        res.push(node.val)
        
        if node.children.length > 0
            i = node.children.length - 1
            
            while i >= 0
                child = node.children[i]
                stack.push(child)
                i -= 1
            end
        end
    end
    return res
end