class BinaryTreeNode
    attr_accessor :value, :left, :right
    def initialize(value)
        @value = value
        @left = nil
        @right = nil
    end
end

## InterviewCake's solutions:

## Recursive solution ##

# def largest_in_bst(root)
#     raise Exception.new("Tree must contain at least one node!") if !root

#     return root.value if !root.right || !root.left

#     return largest_in_bst(root.right) if root.right
# end

# def second_largest_in_bst(root)
#     raise Exception.new("Tree must contain at least two nodes") if !root|| !root.left || !root.right

#     return largest_in_bst(root.left) if !root.right && root.left

#     return root.value if !root.right.left && !root.right.left

#     return second_largest_in_bst(root.right)
# end

## Iterative solution ##

# def largest_in_bst(root)
#     raise Exception.new("Tree must contain at least one node!") if root == nil

#     node = root
#     while node != nil
#         return node.value if node.right == nil
#         node = node.right
#     end
# end

# def second_largest_in_bst(root)
#     raise Exception.new("Tree must contain at least 2 nodes!") if !root || !root.left && !root.right

#     node = root
#     while node
#         return largest_in_bst(node.left) if node.left && !node.right

#         return node.value if !node.right.left && !node.right.right
#         return second_largest_in_bst(root.right)
#     end

# end


## My iterative solution


def second_largest_in_bst(root)
    raise Exception.new("Tree must contain at least 2 nodes!") if !root || !root.left && !root.right 

    stack = [root]
    largest = 0
    second_largest = 0
    while stack.length > 0
        node = stack.pop
        second_largest = [largest, node.value].min
        largest = [largest, node.value].max
        if !node.right
            if node.left
                if !node.left.right
                    second_largest = node.left.value
                else
                    second_largest = node.left.right.value
                end
            end
        else
            stack << node.right
        end
    end
    return second_largest
end

a = BinaryTreeNode.new(50);
b = BinaryTreeNode.new(17);
c = BinaryTreeNode.new(72);
d = BinaryTreeNode.new(12);
e = BinaryTreeNode.new(23);
f = BinaryTreeNode.new(76);
g = BinaryTreeNode.new(54);
h = BinaryTreeNode.new(67);
i = BinaryTreeNode.new(9);
j = BinaryTreeNode.new(14);
k = BinaryTreeNode.new(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
g.right = h;
d.left = i;
d.right = j;
e.left = k;

p second_largest_in_bst(a);

aa = BinaryTreeNode.new(50);
bb = BinaryTreeNode.new(17);
cc = BinaryTreeNode.new(75);
dd = BinaryTreeNode.new(12);
ee = BinaryTreeNode.new(23);
ff = BinaryTreeNode.new(76);
gg = BinaryTreeNode.new(54);
hh = BinaryTreeNode.new(67);
ii = BinaryTreeNode.new(8);
jj = BinaryTreeNode.new(14);
kk = BinaryTreeNode.new(19);

aa.left = bb;
aa.right = cc;
bb.left = dd;
bb.right = ee;
cc.right = ff;
cc.left = gg;
gg.right = hh;
dd.left = ii;
dd.right = jj;
ee.left = kk;

p second_largest_in_bst(aa);

aaa = BinaryTreeNode.new(50);
bbb = BinaryTreeNode.new(30);
ccc = BinaryTreeNode.new(80);
ddd = BinaryTreeNode.new(20);
eee = BinaryTreeNode.new(40);
fff = BinaryTreeNode.new(70);
ggg = BinaryTreeNode.new(90);

aaa.left = bbb;
aaa.right = ccc;
bbb.left = ddd;
bbb.right = eee;
ccc.left = fff;
ccc.right = ggg;

p second_largest_in_bst(aaa);
