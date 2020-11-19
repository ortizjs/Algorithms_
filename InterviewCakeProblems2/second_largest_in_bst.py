class BinaryTreeNode(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
    

### InterviewCake solutions:

## Recursive solution 

# def largest_in_bst(root):
#     if root is None is None:
#         raise ArgumentError("Tree must contain at least 1 node")
#     if root is not None and root.left is None and root.right is None:
#         return root.value
#     return largest_in_bst(root.right)

# def second_largest_in_bst(root):
#     if root is None or root.left is None and root.right is None:
#         raise ArgumentError("Tree must contain at least 2 nodes!")

#     if root.left is not None and root.right is None:
#         return largest_in_bst(root.left)
    
#     if root.right.left is None and root.right.right is None:
#         return root.value

#     return second_largest_in_bst(root.right)

## Iterative solution

# def largest_in_bst(root):
#     if root is None:
#         raise ArgumentError("Tree must contain at least one node!")

#     node = root

#     while node is not None:
#         if node.left is None and node.right is None:
#             return node.value
#         node = node.right

# def second_largest_in_bst(root):
#     if root is None or root.left is None and root.right is None:
#         raise ArgumentError("Treee must contain at least 2 nodes!")
    
#     node = root

#     while node is not None:
#         if node.right is None and node.left is not None:
#             return largest_in_bst(node.left)
#         if node.right.left is None and node.right.right is None:
#             return node.value
#         node = node.right

## My iterative solution

def second_largest_in_bst(root):
    if root is None or root.left is None and root.right is None:
        raise ArgumentError("Tree must contain at least two nodes!")

    stack = [root]
    largest = 0
    second_largest = 0

    while len(stack) > 0:
        node = stack.pop()
        second_largest = min(largest, node.value)
        largest = max(largest, node.value)
        if node.right is None:
            if node.left is not None:
                if node.left.right is not None:
                    second_largest = node.left.right.value
                else:
                    second_largest = node.left.value
        else:
            stack.append(node.right)
    return second_largest

a = BinaryTreeNode(50)
b = BinaryTreeNode(17)
c = BinaryTreeNode(72)
d = BinaryTreeNode(12)
e = BinaryTreeNode(23)
f = BinaryTreeNode(76)
g = BinaryTreeNode(54)
h = BinaryTreeNode(67)
i = BinaryTreeNode(9)
j = BinaryTreeNode(14)
k = BinaryTreeNode(19)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
c.left = g
g.right = h
d.left = i
d.right = j
e.left = k

print second_largest_in_bst(a)

aa = BinaryTreeNode(50)
bb = BinaryTreeNode(17)
cc = BinaryTreeNode(75)
dd = BinaryTreeNode(12)
ee = BinaryTreeNode(23)
ff = BinaryTreeNode(76)
gg = BinaryTreeNode(54)
hh = BinaryTreeNode(67)
ii = BinaryTreeNode(8)
jj = BinaryTreeNode(14)
kk = BinaryTreeNode(19)

aa.left = bb
aa.right = cc
bb.left = dd
bb.right = ee
cc.right = ff
cc.left = gg
gg.right = hh
dd.left = ii
dd.right = jj
ee.left = kk

print second_largest_in_bst(aa)

aaa = BinaryTreeNode(50)
bbb = BinaryTreeNode(30)
ccc = BinaryTreeNode(80)
ddd = BinaryTreeNode(20)
eee = BinaryTreeNode(40)
fff = BinaryTreeNode(70)
ggg = BinaryTreeNode(90)

aaa.left = bbb
aaa.right = ccc
bbb.left = ddd
bbb.right = eee
ccc.left = fff
ccc.right = ggg

print second_largest_in_bst(aaa)
