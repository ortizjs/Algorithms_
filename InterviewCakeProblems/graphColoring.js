class GraphNode {
    constructor(label){
        this.label = label;
        this.color = ""
        this.neighbors = new Set()
    }
}

function legalColoring(graph, colors){
    graph.forEach(node => {
        if (node.neighbors.has(node)) {
            return "Cannot legally color this graph as it has a loop"
        }
        let illegal_colors = new Set()
        node.neighbors.forEach(neighbor => {
            if (neighbor.color != null) {
                illegal_colors.add(neighbor.color)
            }
        })
        
        for (let i = 0; i < colors.length; i++) {
            let color = colors[i];
            if (!illegal_colors.has(color)) {
                node.color = color;
                break;
            }
        }
    })
}

let a = new GraphNode('a')
let b = new GraphNode('b')
let c = new GraphNode('c')

a.neighbors.add(b)
b.neighbors.add(a)
b.neighbors.add(c)
c.neighbors.add(b)

let graph = [a, b, c]

console.log(legalColoring(graph, ["red", "blue", "yellow", "green"]))
for (let node = 0 ; node < graph.length; node++) {
    console.log(node.color)
};