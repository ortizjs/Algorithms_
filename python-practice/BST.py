# from .tree_node import TreeNode
# class BST(object):

#     def __init__(self):
#         self.root = None

#     def insert(self, value, root = self.root):
#         if self.root == None:
#             self.root = TreeNode(value)
#         if value < root:
#             if root.left == None:
#                 root.left = TreeNode(value)
#             else:
#                 self.insert(value, root.left)
#         else:
#             if root.right == None:
#                 root.right = TreeNode(value)
#             else:
#                 self.insert(value, root.right)

class TreeNode(object):

    def __init__(self,value):
        self.value = value
        self.left = None
        self.right = None

# def search(root,value):
#     if root is None or root.value == value:
#         return root
#     if (value < root.value):
#         return search(root.left, value)
#     return search(root.right, value)

# def insert(root, value):
#     if root is None:
#         root = TreeNode(value)
#     else:
#         if value < root.value:
#             if root.left is None:
#                 root.left = TreeNode(value)
#             else:
#                 insert(root.left, value)
#         else:
#             if root.right is None:
#                 root.right = TreeNode(value)
#             else:
#                 insert(root.right, value)

# def in_order(root):
#     if root is None:
#         return 
#     else:
#         in_order(root.left)
#         print(root.value)
#         in_order(root.right)

def search(root,value):
    # if root is None:
    #     return False
    # if root.value == value:
    #     return True
    # if (value < root.value):
    #     return search(root.left, value)
    # return search(root.right, value)

    # stack = [root]
    # while len(stack) > 0:
    #     node = stack.pop()
    #     if value < node.value and node.left is not None:
    #         stack.append(node.left)
    #     elif value >= node.value and node.right is not None:
    #         stack.append(node.right)
    #     else:
    #         return True
    node = root
    while node is not None:
        if value < node.value:
            node = node.left
        elif value > node.value:
            node = node.right
        else:
            return True
    return False


def insert(root, value):
    if root is None:
        root = TreeNode(value)
    else:
        if value < root.value:
            if root.left is None:
                root.left = TreeNode(value)
            else:
                insert(root.left, value)
        else:
            if root.right is None:
                root.right = TreeNode(value)
            else:
                insert(root.right, value)

def in_order(root):
    if root is None:
        return 
    else:
        in_order(root.left)
        print(root.value)
        in_order(root.right)



root = TreeNode(50)
insert(root,30)
insert(root,20)
insert(root,40)
insert(root,70)
insert(root,60)
insert(root,80)

in_order(root)
print(search(root,70))
print(search(root,100))