class BinaryTreeNode(object):
    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None


def super_balanced(root):
    if not root:
        return True
    depths = []
    stack = [[root,0]]

    while len(stack) > 0:
        node_pair = stack.pop()
        node = node_pair[0]
        depth = node_pair[1]

        if not node.left and not node.right:
            if depth not in depths:
                depths.append(depth)
            if len(depths) > 2 or len(depths) == 2 and abs(depths[0] - depths[1]) > 1:
                return False
        else:
            if node.right:
                stack.append([node.right,depth+1])
            if node.left:
                stack.append([node.left,depth+1])
    return True
    
a = BinaryTreeNode('a')
b = BinaryTreeNode('b')
c = BinaryTreeNode('c')
d = BinaryTreeNode('d')
e = BinaryTreeNode('e')
f = BinaryTreeNode('f')
g = BinaryTreeNode('g')
h = BinaryTreeNode('h')

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f
f.right = g
# g.right = h

print super_balanced(a)
