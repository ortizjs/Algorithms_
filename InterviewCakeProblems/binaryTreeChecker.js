binaryTreeNode = require("./binaryTreeNode");

// function binarySearchTreeChecker(root){
//     if (!root) {
//         return true;
//     }
//     let rootNodeValue = root.value;

//     let stack = [root];
//     while (stack.length) {
        
//         let node = stack.shift();

//         if (node.right) {
//             stack.push(node.right);
//             if (node.value > node.right.value || (node.value != rootNodeValue && node.left.value > rootNodeValue)) {
//                 return false;
//             }
//         }

//         if (node.left) {
//             stack.push(node.left);
//             if (node.left.value > node.value || (node.value != rootNodeValue && node.right.value < rootNodeValue)) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

function binarySearchTreeChecker(root) {
   let nodeAndBounds = [{node: root, lowerBound: -Infinity, upperBound: Infinity}];

   while (nodeAndBounds.length) {
       let {node, lowerBound, upperBound} = nodeAndBounds.pop();

       if (node.value <= lowerBound || node.value >= upperBound) {
           return false;
       }
       if (node.right) {
           nodeAndBounds.push({node: node.right, lowerBound: node.value, upperBound});
       }
       if (node.left) {
           nodeAndBounds.push({node: node.left, lowerBound, upperBound: node.value});
       }
   }
   return true;
}

function binarySearchTreeCheckerRecur(root, lowerBound, upperBound) {
    if (!root) {
        return true;
    }
    if (lowerBound === undefined ? -Infinity : lowerBound);
    if (upperBound === undefined ? Infinity : upperBound);

    if (root.value <= lowerBound || root.value >= upperBound) {
        return false;
    }
    return (binarySearchTreeCheckerRecur(root.right, root.value, upperBound) &&
            binarySearchTreeCheckerRecur(root.left, lowerBound, root.value));
}

let a = new binaryTreeNode(50);
let b = new binaryTreeNode(17);
let c = new binaryTreeNode(72);
let d = new binaryTreeNode(12);
let e = new binaryTreeNode(23);
let f = new binaryTreeNode(76);
let g = new binaryTreeNode(54);
let h = new binaryTreeNode(67);
let i = new binaryTreeNode(9);
let j = new binaryTreeNode(14);
let k = new binaryTreeNode(19);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
c.left = g;
g.right = h;
d.left = i;
d.right = j;
e.left = k;

console.log(binarySearchTreeChecker(a));
console.log(binarySearchTreeCheckerRecur(a));

let aa = new binaryTreeNode(50);
let bb = new binaryTreeNode(17);
let cc = new binaryTreeNode(72);
let dd = new binaryTreeNode(12);
let ee = new binaryTreeNode(23);
let ff = new binaryTreeNode(76);
let gg = new binaryTreeNode(54);
let hh = new binaryTreeNode(67);
let ii = new binaryTreeNode(61);
let jj = new binaryTreeNode(14);
let kk = new binaryTreeNode(19);

aa.left = bb;
aa.right = cc;
bb.left = dd;
bb.right = ee;
cc.right = ff;
cc.left = gg;
gg.right = hh;
dd.left = ii;
dd.right = jj;
ee.left = kk;

console.log(binarySearchTreeChecker(aa));
console.log(binarySearchTreeCheckerRecur(aa));

let aaa = new binaryTreeNode(50);
let bbb = new binaryTreeNode(30);
let ccc = new binaryTreeNode(80);
let ddd = new binaryTreeNode(20);
let eee = new binaryTreeNode(60);
let fff = new binaryTreeNode(70);
let ggg = new binaryTreeNode(90);

aaa.left = bbb;
aaa.right = ccc;
bbb.left = ddd;
bbb.right = eee;
ccc.left = fff;
ccc.right = ggg;

console.log(binarySearchTreeChecker(aaa));
console.log(binarySearchTreeCheckerRecur(aaa));