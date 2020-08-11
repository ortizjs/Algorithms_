from .py_node import Node

class Queue(object):
    def __init__(self):
        self.front = None
        self.back = None
        self.length = 0
    
    def enqueue(self, value):
        new_node = Node(value)
        if not self.front:
            self.front = new_node
            self.back = new_node
        else:
            self.back.next = new_node
            self.back = new_node
        self.length += 1
        return self.length

    def dequeue(self):
        if not self.front:
            return None
        temp = self.front
        if (self.front == self.back):
            self.back = None
        self.front = self.front.next
        self.length -= 1
        return temp
    
    def size(self):
        return self.length 
