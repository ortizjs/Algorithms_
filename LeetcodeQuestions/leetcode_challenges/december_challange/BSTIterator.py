class BSTIterator:

    def __init__(self, root):
        self.index = -1
        self.sorted_nodes = []
        self.inOrder(root)

    def next(self):
        self.index += 1
        if self.index < len(self.sorted_nodes):
            return self.sorted_nodes[self.index]

    def hasNext(self):
        return self.index < len(self.sorted_nodes) - 1

    def inOrder(self, root):
        if not root:
            return
        self.inOrder(root.left)
        self.sorted_nodes.append(root.val)
        self.inOrder(root.right)