// Need to write a function to determine if tree is a valid binary search tree.
// How can we determine if this tree is a valid binary search tree.
// In BST, all node elements to the left of the root must be less than root and all elements to the right must be greater or equal than root 
// value.
// We need to itera over the given tree, we can either do DFS or BFS. 
const binaryTreeNode = require("./binaryTreeNode");

function bstChecker(root) {
    let stack = [{node: root, lowerBound: -Infinity, upperBound: Infinity}]
    
    while (stack.length) {
        const { node, lowerBound, upperBound } = stack.pop();
        if (node.value <= lowerBound || node.value >= upperBound) {
            return false
        }
        if (node.right) {
            stack.push({node: node.right, lowerBound: node.value, upperBound})
        }
        if (node.left) {
            stack.push({node: node.left, lowerBound, upperBound: node.value})
        }
    }
    return true;

}

let a = new binaryTreeNode(50)
let b = new binaryTreeNode(30)
let c = new binaryTreeNode(80)
let d = new binaryTreeNode(20)
let e = new binaryTreeNode(40)
let f = new binaryTreeNode(10)
let g = new binaryTreeNode(70)
let h = new binaryTreeNode(90)
let i = new binaryTreeNode(60)
let j = new binaryTreeNode(85)
let k = new binaryTreeNode(100)
let l = new binaryTreeNode(49)

a.left = b
a.right = c
b.left = d;
b.right = e;
d.left = f;
c.left = g
c.right = h
g.left = i
h.left = j
h.right = k
// j.left = l

console.log(bstChecker(a));