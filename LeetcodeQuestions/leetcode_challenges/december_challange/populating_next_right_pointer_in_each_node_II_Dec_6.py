"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
## constant space for this.
## In a way we need to traverse the whole tree so might lead us to linear time.
## at every node, we need to look check it if has left and right child:
##    If it has left and right, we can set the next of currentNode's left child to currentNode's right ## child.


class Solution:

    def assign_next(self, nodes):
        for i in range(len(nodes) - 1):
            node = nodes[i]
            node.next = nodes[i + 1]

    def get_children(self, nodes):
        new_queue = []
        for current_node in nodes:
            if current_node.left:
                new_queue.append(current_node.left)
            if current_node.right:
                new_queue.append(current_node.right)
        return new_queue

    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root
        queue = [root]

        while queue:
            self.assign_next(queue)
            queue = self.get_children(queue)

        return root
