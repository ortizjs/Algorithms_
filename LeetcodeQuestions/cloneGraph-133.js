/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 * Time: O(n + m) where n is the number of nodes and m is the number of edges
 * Space: O(n) n for the space used by the map and by the recursive call stack
 */

function dfs(node, visited = new Map()) {
    if (visited.has(node)) return visited.get(node);
    let clonedNode = new Node(node.val, []);
    visited.set(node, clonedNode);

    node.neighbors.forEach(neighbor => {
        clonedNode.neighbors.push(dfs(neighbor, visited))
    })
    return clonedNode;
}

var cloneGraph = function(node) {
    if (!node) return node;
    return dfs(node)
};