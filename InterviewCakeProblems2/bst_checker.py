class BinaryTreeNode(object):
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def bst_checker(root):
    stack = [{"node": root, "lower_bound": float("-inf"), "upper_bound": float("inf")}]

    while len(stack) > 0:
        current_node = stack.pop()
        node = current_node['node']
        lower_bound = current_node['lower_bound']
        upper_bound = current_node['upper_bound']

        if node.value <= lower_bound or node.value >= upper_bound:
            return False
        if node.right is not None:
            stack.append({'node': node.right, 'lower_bound': node.value, 'upper_bound': upper_bound})
        if node.left is not None:
            stack.append({"node": node.left, "lower_bound": lower_bound, "upper_bound": node.value})
    return True


a = BinaryTreeNode(50)
b = BinaryTreeNode(30)
c = BinaryTreeNode(80)
d = BinaryTreeNode(20)
e = BinaryTreeNode(40)
f = BinaryTreeNode(10)
g = BinaryTreeNode(70)
h = BinaryTreeNode(90)
i = BinaryTreeNode(60)
j = BinaryTreeNode(85)
k = BinaryTreeNode(100)
l = BinaryTreeNode(49)

a.left = b
a.right = c
b.left = d
b.right = e
d.left = f
c.left = g
c.right = h
g.left = i
h.left = j
h.right = k
# j.left = l

print bst_checker(a)
