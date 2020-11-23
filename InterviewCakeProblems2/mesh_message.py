class Queue(object):
    def __init__(self):
        self.queue = []
        self.size = 0

    def enqueue(self, item):
        self.queue.insert(0, item)
        self.size += 1

    def dequeue(self):
        self.size -= 1
        return self.queue.pop()


def reconstruct_path(how_we_reached_nodes, start_node, end_node):
    node = end_node
    path = []
    while (node is not None):
        path.append(node)
        node = how_we_reached_nodes[node]
    return path

def get_path(graph, start_node, end_node):
    if not graph.has_key(start_node) or not graph.has_key(end_node):
        error_node = start_node if not graph.has_key(start_node) else end_node
        raise Exception('%s must be present in the network!' %error_node)

    nodes_to_visit = Queue()
    nodes_to_visit.enqueue(start_node)

    how_we_reached_nodes = {}
    how_we_reached_nodes[start_node] = None

    while (nodes_to_visit.size > 0):
        current_node = nodes_to_visit.dequeue()

        if current_node == end_node:
            return reconstruct_path(how_we_reached_nodes, start_node, end_node)

        for neighbor in graph[current_node]:
            if not how_we_reached_nodes.has_key(neighbor):
                nodes_to_visit.enqueue(neighbor)
                how_we_reached_nodes[neighbor] = current_node

    return None


network = {
    'Min': ['William', 'Jayden', 'Omar'],
    'William': ['Min', 'Noam'],
    'Jayden': ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren': ['Jayden', 'Omar'],
    'Amelia': ['Jayden', 'Adam', 'Miguel'],
    'Adam': ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel': ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam': ['Nathan', 'Jayden', 'William'],
    'Omar': ['Ren', 'Min', 'Scott'],
}

graph = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'd'],
    'c': ['a', 'e'],
    'd': ['a', 'b'],
    'e': ['c'],
    'f': ['g'],
    'g': ['f']
}

print get_path(network, "Jayden", "Adam")  # ['Jayden', 'Amelia', 'Adam']
# print get_path(network, "Min", "Adam") ## ['Min','Jayden', 'Amelia', 'Adam']
print get_path(graph, "a", "e")  # [ 'a', 'c', 'e' ]
print get_path(graph, "d", "c")  # [ 'd', 'a', 'c' ]
print get_path(graph, "a", "c")  # [ 'a', 'c' ]
print get_path(graph, "f", "g")  # [ 'f', 'g' ]
print get_path(graph, "g", "f")  # [ 'g', 'f' ]
print get_path(graph, "a", "a")  # ['a']
print get_path(graph, "a", "f")  # null
print get_path(graph, "h", "a")  # Should raise exception
# print get_path(graph, "a", "h") ## Should raise exception
