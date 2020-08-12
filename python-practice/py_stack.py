class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack(object):

    def __init__(self):
        self.top = None
        self.bottom = None
        self.length = 0
    
    def push(self, value):
        new_node = Node(value)

        if not self.top:
            self.top = new_node
            self.bottom = new_node
        else:
            temp = self.top
            self.top = new_node
            self.bottom.next = temp

    def pop(self):
        if not self.top:
            return None
        temp = self.top
        if (self.top == self.bottom):
            self.bottom = None
        self.top = self.top.next
        self.length -= 1
        return temp.value

    def size(self):
        return self.length

newStack = Stack()
newStack.push(10)
newStack.push(12)
newStack.push(8)
newStack.push(2)
newStack.push(20)

