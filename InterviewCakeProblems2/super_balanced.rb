class BinaryTreeNode
    attr_accessor :value, :left, :right
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

def super_balanced(root)
    return true if !root
    depths = []
    stack = [[root,0]]
    while stack.length > 0
        node_pair = stack.pop()
        # p node_pair
        node = node_pair[0]
        depth = node_pair[1]
        if !node.left && !node.right
            depths.push(depth) if !depths.index(depth)
            return false if depths.length > 2 || depths.length == 2 && (depths[0] - depths[1]).abs > 1
        else
            stack << [node.right, depth + 1] if node.right
            stack << [node.left, depth + 1] if node.left
        end
    end
    return true
end

a = BinaryTreeNode.new('a')
b = BinaryTreeNode.new('b')
c = BinaryTreeNode.new('c')
d = BinaryTreeNode.new('d')
e = BinaryTreeNode.new('e')
f = BinaryTreeNode.new('f')
g = BinaryTreeNode.new('g')
h = BinaryTreeNode.new('h')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
f.right = g
# g.right = h

puts super_balanced(a);