binaryTreeNode = require("./binaryTreeNode");
// import binaryTreeNode from "binaryTreeNode";

function superBalanced(root) {
   if (!root) {
       return true;
   }

   let nodes = [[root, 0]];
   let depths = [];

   while (nodes.length) {
       let nodePair = nodes.pop();
       let node = nodePair[0];
       let depth = nodePair[1];

       if (!node.left && !node.right) {
           if (depths.indexOf(depth) === -1) {
               depths.push(depth);

               if (depths.length > 2 || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                   return false;
               }
            }
        } else {
            if (node.left) {
                nodes.push([node.left, depth + 1]);
            }
            if (node.right) {
                nodes.push([node.right, depth + 1]);
            }
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

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(superBalanced(a));
