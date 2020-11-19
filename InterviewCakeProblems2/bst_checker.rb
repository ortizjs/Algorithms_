class BinaryTreeNode
    attr_accessor :value, :left, :right
    
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

def bst_checker(root)
    stack = [{node: root, lower_bound: -Float::INFINITY, upper_bound: Float::INFINITY}]

    while stack.length > 0
        current_node = stack.pop
        node = current_node[:node]
        lower_bound = current_node[:lower_bound]
        upper_bound = current_node[:upper_bound]

        
        if node.value <= lower_bound || node.value >= upper_bound
            return false
        end
        if node.right != nil
            stack.push({:node => node.right, :lower_bound => node.value, :upper_bound => upper_bound}) 
        end

        if node.left != nil
            stack.push({:node => node.left, :lower_bound => lower_bound, :upper_bound => node.value}) 
        end
    end
    return true
end

a = BinaryTreeNode.new(50)
b = BinaryTreeNode.new(30)
c = BinaryTreeNode.new(80)
d = BinaryTreeNode.new(20)
e = BinaryTreeNode.new(40)
f = BinaryTreeNode.new(10)
g = BinaryTreeNode.new(70)
h = BinaryTreeNode.new(90)
i = BinaryTreeNode.new(60)
j = BinaryTreeNode.new(85)
k = BinaryTreeNode.new(100)
l = BinaryTreeNode.new(49)

a.left = b
a.right = c
b.left = d;
b.right = e;
d.left = f;
c.left = g
c.right = h
g.left = i
h.left = j
h.right = k
j.left = l

p bst_checker(a);