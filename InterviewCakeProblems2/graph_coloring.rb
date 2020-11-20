require 'set'

class GraphNode
    attr_accessor :label, :neighbors, :color

    def initialize(label)
        @label = label
        @color = nil
        @neighbors = Set.new()
    end
end

def graph_coloring(graph, colors)
    graph.each do |node|
        raise Exception.new("No legal coloring possible for graphs with loops!") if node.neighbors.include?(node)
        illegal_colors = Set.new()
        node.neighbors.each do |neighbor|
            illegal_colors.add(neighbor.color) if neighbor.color != nil
        end
        colors.each do |color|
            node.color = color if !illegal_colors.include?(color)
        end
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')

a.neighbors.add(b)
b.neighbors.add(a)
c.neighbors.add(b)
b.neighbors.add(c)
graph = [a,b,c]

graph_coloring(graph, ["red", "blue", "green"])

# graph.each {|node| p node.color}