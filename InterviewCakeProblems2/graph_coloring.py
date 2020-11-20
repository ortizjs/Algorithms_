class GraphNode(object):
    def __init__(self, label):
        self.label = label
        self.color = None
        self.neighbors = set(())

def graph_coloring(graph,colors):
    for node in graph:
        if node in node.neighbors:
            raise ArgumentError("No legal coloring for graphs with a loop.")
        illegal_colors = set(()) 
        for neighbor in node.neighbors:
            if neighbor.color is not None:
                illegal_colors.add(color)
        for color in colors:
            if color not in illegal_colors:
                node.color = color
                break
    return graph


a=GraphNode('a')
b=GraphNode('b')
c=GraphNode('c')

a.neighbors.add(b)
b.neighbors.add(a)
c.neighbors.add(b)
b.neighbors.add(c)
graph = [a, b, c]
 
print graph_coloring(graph, ["red", "blue", "green"])
for node in graph:
    print node.color
