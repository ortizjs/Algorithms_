class BinaryTreeNode
    attr_accessor :value, :left, :right
    
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

def super_balanced(root)
    if !root
        return true
    end

    stack = [[root, 0]]
    depths = []

    while stack.length > 0
        node_pair = stack.pop
        node = node_pair[0]
        depth = node_pair[1]

        if !node.left and !node.right
            if !depths.index(depth)
                depths << depth
                if depths.length > 2 || (depths.length == 2 && (depths[0] - depths[1]).abs > 1)
                    return false
                end
            end
        else
            if node.left
                stack << [node.left, depth + 1]
            end

            if node.right
                stack << [node.right, depth + 1]
            end
        end
    end
    true
end

a = BinaryTreeNode.new('a');
b = BinaryTreeNode.new('b');
c = BinaryTreeNode.new('c');
d = BinaryTreeNode.new('d');
e = BinaryTreeNode.new('e');
f = BinaryTreeNode.new('f');
g = BinaryTreeNode.new('g');
h = BinaryTreeNode.new('h');

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
f.right = g
# g.right = h

puts super_balanced(a);
