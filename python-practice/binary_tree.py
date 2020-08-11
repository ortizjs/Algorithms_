# class BinaryTree(object):

#     def __init__(self):
#          self.root = None
    
#     def in_order_print(self, root):
#         if self.root == None:
#             return 
#         self.in_order_print(root.left)
#         print(self.root.value)
#         self.in_order_print(root.right)

#     def pre_order_print(self, root):
#         if self.root == None:
#             return
#         print(self.root.value)
#         self.pre_order_print(self.root.left)
#         self.pre_order_print(self.root.right)

#     def post_order_print(self,root):
#         if self.root == None:
#             return
#         self.post_order_print(self.root.left)
#         self.post_order_print(self.root.right)
#         print(self.root.value)

def in_order_print(root):
    if root == None:
        return
    in_order_print(root.left)
    print(root.value)
    in_order_print(root.right)

def pre_order_print(root):
    if root == None:
        return
    print(root.value)
    pre_order_print(root.left)
    pre_order_print(root.right)

def post_order_print(root):
    if root == None:
        return
    post_order_print(root.left)
    post_order_print(root.right)
    print(root.value)

def depth_first(root):
    stack = [root]

    while len(stack) > 0:
        node = stack.pop()
        print(node.value)
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)

def depth_first_recur(root):
    if root == None:
        return
    print(root.value)
    depth_first_recur(root.left)
    depth_first_recur(root.right)

def breadth_first(root):
    queue = [root]

    while len(queue) > 0:
        node = queue.pop(0)
        print(node.value)
        if node.left:
            queue.append(node.left)
        if node.right:
            queue.append(node.right)
        