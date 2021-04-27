def dfs(parent, current, level, levels, graph, res)
    levels[current] = level + 1
    current_level = levels[current]

    graph[current].each do |next_node|
        next if parent === next_node
        if levels[next_node] == nil
            dfs(current, next_node, level + 1, levels, graph, res) 
        end
        
        levels[current] = [levels[current], levels[next_node]].min
        res << [current, next_node] if current_level < levels[next_node]
    end
end


def critical_connections(n, connections)
    graph =  Array.new(n) {Array.new()}
    levels = Array.new(n)
    critical = []
    
    connections.each do |pair|
        graph[pair[0]] << pair[1]
        graph[pair[1]] << pair[0]
    end
    print(graph, levels)
    dfs(-1,0,0,levels, graph, critical)
    critical
end