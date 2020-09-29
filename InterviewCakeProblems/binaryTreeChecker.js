// const binaryTreeNode = require("./binaryTreeNode");

// const binaryTreeNode = require("./binaryTreeNode");
binaryTreeNode = require("./binaryTreeNode");


// binaryTreeNode = require(".binaryTreeNode");

function binarySearchTreeChecker(root){
    if (!root) {
        return true;
    }

    let stack = [root];
    while (stack.length) {
        
        let node = stack.pop();

        if (node.right) {
            stack.push(node.right);
            if (node.value > node.right.value) {
                return false;
            }
        }
        if (node.left) {
            stack.push(node.left);
            if (node.left.value > node.value) {
                return false;
            }
        }
    }
    return true;
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