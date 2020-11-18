const binaryTreeNode = require("./binaryTreeNode");

// Super balanced means that that the difference between the depths of any two leaf nodes is not greater than 1
// Since leaf nodes are mentioned we would probably want to use DFS to get to the leaf node as fast as we can. 
// For every branch we decide to go down we will need to keep track of the depths and add to some sort of data structure to keep track of 
// all the lead nodes visited. 
function superBalanced(root){
    if (!root) return true;

    let depths = [];
    let stack = [[root,0]];

    while (stack.length){
        let nodePair = stack.pop();
        let node = nodePair[0];
        let depth = nodePair[1];
        if (!node.left && !node.right) {
            if (depths.indexOf(depth) === -1) depths.push(depth);
            if (depths.length > 2 || depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1) return false
        } else {
            if (node.right) stack.push([node.right, depth + 1]);
            if (node.left) stack.push([node.left, depth + 1]);
        }
    }
    return true;
}



let a = new binaryTreeNode('a');
let b = new binaryTreeNode('b');
let c = new binaryTreeNode('c');
let d = new binaryTreeNode('d');
let e = new binaryTreeNode('e');
let f = new binaryTreeNode('f');

let aa = new binaryTreeNode('a');
let bb = new binaryTreeNode('b');
let cc = new binaryTreeNode('c');
let dd = new binaryTreeNode('d');
let ee = new binaryTreeNode('e');
let ff = new binaryTreeNode('f');
let gg = new binaryTreeNode('g');
let hh = new binaryTreeNode('h');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

aa.left = bb;
aa.right = cc;
bb.left = dd;
bb.right = ee;
cc.right = ff;
ff.right = gg
gg.right = hh
console.log(superBalanced(a));
console.log(superBalanced(aa));
