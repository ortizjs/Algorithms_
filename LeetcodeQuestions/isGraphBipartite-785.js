/**
 * @param {number[][]} graph
 * @return {boolean}
 * 
 * Time: O(N + E) where N is the number of Nodes and E the number of Vertices. We visited each node once when transforming from uncolored to colored traversing all the edges in the process.
 * 
 * Space: O(N) for the space used by the colored array.
 */
var isBipartite = function(graph) {
    let n = graph.length;
    let colored = new Array(n).fill(-1);

    for (let startNode = 0; startNode < n; startNode++) {
        if (colored[startNode] === -1) {
            let stack = [startNode];
            colored[startNode] = 0;

            while (stack.length) {
                let currentNode = stack.pop();
                for (let neighborNode of graph[currentNode]) {
                    if (colored[neighborNode] === -1) {
                        stack.push(neighborNode);
                        colored[neighborNode] = colored[currentNode] ^ 1;
                    } else if (colored[neighborNode] === colored[currentNode]) {
                        return false;
                    }
                }
            }
        }
    }
    return true;
};