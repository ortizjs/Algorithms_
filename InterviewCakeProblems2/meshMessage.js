const Queue = require("./Queue");


// InterviewCakes's solution:

// function reconstructPath(howWeReachedNodes, startNode, endNode) {
//     let node = endNode;
//     let path = [];
//     while (node !== null) {
//         path.push(node);
//         node = howWeReachedNodes[node];
//     }
//     return path.reverse();
// }

// function getPath(graph, startNode, endNode) {
//     if (!graph.hasOwnProperty(startNode)) {
//         throw new Error("startNode must be in graph!");
//     }

//     if (!graph.hasOwnProperty(endNode)) {
//         throw new Error("endNode must be in graph!");
//     }

//     let nodesToVisit = new Queue();
//     nodesToVisit.enqueue(startNode);

//     let howWeReachedNodes = {};
//     howWeReachedNodes[startNode] = null;

//     while (nodesToVisit.size > 0) {
//         let currentNode = nodesToVisit.dequeue();

//         if (currentNode === endNode) {
//             return reconstructPath(howWeReachedNodes, startNode, endNode);
//         }

//         graph[currentNode].forEach(neighbor => {
//             if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
//                 nodesToVisit.enqueue(neighbor);
//                 howWeReachedNodes[neighbor] = currentNode;
//             };
//         });
//     }
//     return null;
// }


//My solution which is InterviewCakes's solution except it does not error out on the input startNode: "Min", endNode: "Adam"

// function reconstructPath(howWeReachedNodes, startNode, endNode) {

//     const reversedShortestPath = [];

//     // Start from the end of the path and work backwards
//     let currentNode = endNode;

//     while (currentNode !== null) {
//         reversedShortestPath.push(currentNode);
//         currentNode = howWeReachedNodes[currentNode];
//     }

//     // Reverse our path to get the right order
//     return reversedShortestPath.reverse(); // No longer reversed
// }

// function getPath(graph, startNode, endNode) {

//     if (!graph.hasOwnProperty(startNode)) {
//         throw new Error('Start node not in graph!');
//     }
//     if (!graph.hasOwnProperty(endNode)) {
//         throw new Error('End node not in graph!');
//     }

//     const nodesToVisit = new Queue();
//     nodesToVisit.enqueue(startNode);

//     // Keep track of how we got to each node
//     // We'll use this to reconstruct the shortest path at the end
//     // We'll ALSO use this to keep track of which nodes we've
//     // already visited
//     const howWeReachedNodes = {};
//     howWeReachedNodes[startNode] = null;

//     while (nodesToVisit.size > 0) {
//         const currentNode = nodesToVisit.dequeue();

//         // Stop when we reach the end node
//         if (currentNode === endNode) {
//             return reconstructPath(howWeReachedNodes, startNode, endNode);
//         }
//         // console.log(howWeReachedNodes)
//         // console.log("before entering in forEach.", currentNode, graph[currentNode]);
//         while (graph[currentNode] === undefined) {
//             // console.log("entered conditional for no neighbors....")
//             const currentNode = nodesToVisit.dequeue();
//             // console.log(currentNode)
//             if (currentNode === endNode) {
//                 return reconstructPath(howWeReachedNodes, startNode, endNode);
//             }
//         }
//         graph[currentNode].forEach(neighbor => {
//             if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
//                 nodesToVisit.enqueue(neighbor);
//                 howWeReachedNodes[neighbor] = currentNode;
//             }
//         });
//     }

//     // If we get here, then we never found the end node
//     // so there's NO path from startNode to endNode
//     return null;
// }

// My solution based on some hints from InterviewCake:

function getPath(graph, startNode, endNode){
    if (graph[startNode] === undefined || graph[endNode] === undefined) {
        let errorNode = graph[startNode] === undefined ? startNode : endNode;
        throw new Error(`${errorNode} must be in the network`)
    }

    let queue = new Queue();
    queue.enqueue(startNode);
    let howWeReachedNodes = {}
    howWeReachedNodes[startNode] = null;
    let nodesAlreadySeen = new Set([startNode]);

    while (queue.size > 0) {
        let currentNode = queue.dequeue();
        if (currentNode === endNode) {
            howWeReachedNodes["end"] = endNode;
            break;
        }
        // console.log("currentNode: ", currentNode, graph[currentNode])
        graph[currentNode].forEach(neighbor => {
            if (!nodesAlreadySeen.has(neighbor)) {
                queue.enqueue(neighbor);
                nodesAlreadySeen.add(neighbor);
                howWeReachedNodes[neighbor] = currentNode;
            }
        });
    }

    let path = constructPath(howWeReachedNodes, startNode, endNode);
    return path;
};


function constructPath(howWeReachedNodes, startNode, endNode) {
    if (howWeReachedNodes['end'] === undefined) return null;
    let path = [];
    let node = endNode;
    while (node != null) {
        path.unshift(node);
        node = howWeReachedNodes[node];
    }
    return path;
}



const network = {
    'Min': ['William', 'Jayden', 'Omar'],
    'William': ['Min', 'Noam'],
    'Jayden': ['Min', 'Amelia', 'Ren', 'Noam'],
    'Ren': ['Jayden', 'Omar'],
    'Amelia': ['Jayden', 'Adam', 'Miguel'],
    'Adam': ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
    'Miguel': ['Amelia', 'Adam', 'Liam', 'Nathan'],
    'Noam': ['Nathan', 'Jayden', 'William'],
    'Omar': ['Ren', 'Min', 'Scott'],
};

const graph = {
    'a': ['b', 'c', 'd'],
    'b': ['a', 'd'],
    'c': ['a', 'e'],
    'd': ['a', 'b'],
    'e': ['c'],
    'f': ['g'],
    'g': ['f']
};

console.log(getPath(network, "Jayden", "Adam")); // ['Jayden', 'Amelia', 'Adam']
// console.log(getPath(network, "Min", "Adam")); // ['Min','Jayden', 'Amelia', 'Adam']
console.log(getPath(graph, "a", "e")); // [ 'a', 'c', 'e' ]
console.log(getPath(graph, "d", "c")); // [ 'd', 'a', 'c' ]
console.log(getPath(graph, "a", "c")); // [ 'a', 'c' ]
console.log(getPath(graph, "f", "g")); // [ 'f', 'g' ]
console.log(getPath(graph, "g", "f")); // [ 'g', 'f' ]
console.log(getPath(graph, "a", "a")); // ['a']
console.log(getPath(graph, "a", "f")); // null
// console.log(getPath(graph, "h", "a")); // Should raise exception
// console.log(getPath(graph, "a", "h")); // Should raise exception