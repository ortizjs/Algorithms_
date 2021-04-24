var criticalConnections = function(n, connections) {
    let graph = Array.from(Array(n), () => []);
    let levels = [];
    let critical = [];

    for (let [a,b] of connections) {
        graph[a].push(b);
        graph[b].push(a);
    }
    dfs(-1, 0,0, levels, graph, critical)
    return critical;

};

function dfs(parent, current, level, levels, graph, results) {
    levels[current] = level + 1;
    let currentLevel = levels[current];

    for (let next of graph[current]) {
        if (next === parent) continue;
        if (!levels[next]) dfs(current, next, level + 1, levels, graph, results);
        levels[current] = Math.min(levels[current], levels[next]);
        if (currentLevel < levels[next]) {
            results.push([current, next]);
        }
    }
}

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]))