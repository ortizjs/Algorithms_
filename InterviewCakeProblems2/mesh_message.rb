class Queue
    attr_accessor :queue, :size

    def initialize
        @queue = []
        @size = 0
    end

    def enqueue(item)
        @queue.unshift(item)
        @size += 1
    end

    def dequeue
        @size -= 1
        return @queue.pop()
    end
end


def reconstruct_path(how_we_reached_nodes, start_node, end_node)
    node = end_node
    path = [];
    while node != nil
        path.unshift(node)
        node = how_we_reached_nodes[node]
    end
    return path
end

def get_path(graph, start_node, end_node)
    if graph[start_node] == nil || graph[end_node] == nil
        error_node = graph[start_node] == nil ? start_node : end_node
        raise Exception.new(error_node + " must be in the network!")
    end

    nodes_to_visit = Queue.new();
    nodes_to_visit.enqueue(start_node);

    how_we_reached_nodes = {}
    how_we_reached_nodes[start_node] = nil;

    while nodes_to_visit.size > 0
        current_node = nodes_to_visit.dequeue()
        if current_node == end_node
            return reconstruct_path(how_we_reached_nodes, start_node, end_node)
        end
        graph[current_node].each do |neighbor|
            if !how_we_reached_nodes.has_key?(neighbor)
                nodes_to_visit.enqueue(neighbor)
                how_we_reached_nodes[neighbor] = current_node
            end
        end
    end
    return nil;
end



network = {
    'Min' => ['William', 'Jayden', 'Omar'],
    'William' => ['Min', 'Noam'],
    'Jayden' => ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren' => ['Jayden', 'Omar'],
    'Amelia' => ['Jayden', 'Adam', 'Miguel'],
    'Adam' => ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel' => ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam' => ['Nathan', 'Jayden', 'William'],
    'Omar' => ['Ren', 'Min', 'Scott'],
};

graph = {
    'a' => ['b', 'c', 'd'],
    'b' => ['a', 'd'],
    'c' => ['a', 'e'],
    'd' => ['a', 'b'],
    'e' => ['c'],
    'f' => ['g'],
    'g' => ['f']
};

p get_path(network, "Jayden", "Adam") ## ['Jayden', 'Amelia', 'Adam']
# p get_path(network, "Min", "Adam") ## ['Min','Jayden', 'Amelia', 'Adam']
p get_path(graph, "a", "e") ## [ 'a', 'c', 'e' ]
p get_path(graph, "d", "c") ## [ 'd', 'a', 'c' ]
p get_path(graph, "a", "c") ## [ 'a', 'c' ]
p get_path(graph, "f", "g") ## [ 'f', 'g' ]
p get_path(graph, "g", "f") ## [ 'g', 'f' ]
p get_path(graph, "a", "a") ## ['a']
p get_path(graph, "a", "f") ## null
p get_path(graph, "h", "a") ## Should raise exception
# p get_path(graph, "a", "h") ## Should raise exception