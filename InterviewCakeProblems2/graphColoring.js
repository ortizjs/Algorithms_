// Given a undirected graph, with maximum degree D, find a graph coloring using at most D + 1 colors. Degree represnts the edges for each node
// Graph are represented by an array of N nodes, each with a label, a set of neighbors, and a color.
// 
const GraphNode = require("./graphNode");

function graphColoring(graph, colors){

    graph.forEach(node => {
        if (node.neighbors.has(node)) {
            throw new Error("Graph cannot contain loops!")
        }

        let illegalColors = new Set();
        node.neighbors.forEach(neighbor => {
            if (neighbor.color != null) {
                illegalColors.add(neighbor.color);
            }
        });
        for (let i = 0; i < colors.length; i++) {
            color = colors[i]
            if (!illegalColors.has(color)) {
                node.color = color
                break;
            }
        };
    });
    return graph
}

const a = new GraphNode('a');
const b = new GraphNode('b');
const c = new GraphNode('c');

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c)
const graph = [a,b,c]

console.log(graphColoring(graph, ["red", "blue", "gree"]))