class GraphNode(object):

    def __init__(self,value):
        self.value = value
        self.neighbors = []


def depth_first_recur(node,visited=set()):
    if node.value in visited:
        return
    print(node.value)
    visited.add(node.value)
    for i in range(0,len(node.neighbors)):
        current = node.neighbors
        depth_first_recur(current[i],visited)

def depth_first_recur_adj_list(node,graph,visited=set()):
    if node in visited:
        return
    print(node)
    visited.add(node)
    for i in range(0, len(graph[node])):
        current = graph[node][i]
        depth_first_recur_adj_list(current,graph, visited)



def depth_first_recur_adj_list_2(node,graph,visited=set()):
    if node in visited:
        return
    print(node)
    visited.add(node)
    for neighbor in graph[node]:
        # current = graph[node][i]
        depth_first_recur_adj_list_2(neighbor,graph,visited)


def dynamic_depth_first(graph):
    visited = set()
    for node in graph:
        depth_first_recur_adj_list_2(node, graph, visited)


a = GraphNode('a')
b = GraphNode('b')
c = GraphNode('c')
d = GraphNode('d')
e = GraphNode('e')
f = GraphNode('f')
a.neighbors = [e, c, b]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]

graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
}

graph2 = {
    'h': ['i', 'j'],
    'i': [],
    'j': ['k'],
    'k': [],
    'l': ['m'],
    'm': []
}

depth_first_recur(f)
print("--------")
depth_first_recur_adj_list('f',graph)
print("--------")
dynamic_depth_first(graph)
print("--------")
dynamic_depth_first(graph2)

