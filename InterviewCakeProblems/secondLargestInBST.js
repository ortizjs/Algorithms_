binaryTreeNode = require("./binaryTreeNode");

function findLargestInBST(root) {
    if (!root) {
        throw new Error("Tree must have at least one node");
    }
    if (root.right) {
        return findLargestInBST(root.right);
    }
    return root.value;
}

function secondLargestInBinarySearchTree(root) {
    if (!root || (!root.right && !root.left)) {
        throw new Error("Tree must have at least two nodes");
    }

    if (root.left && !root.right) {
        return findLargestInBST(root.left);
    }
    
    if (root.right && (!root.right.left && !root.right.right)) {
        return root.value;
    }

    return secondLargestInBinarySearchTree(root.right);
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

console.log(secondLargestInBinarySearchTree(a));

let aa = new binaryTreeNode(50);
let bb = new binaryTreeNode(17);
let cc = new binaryTreeNode(75);
let dd = new binaryTreeNode(12);
let ee = new binaryTreeNode(23);
let ff = new binaryTreeNode(76);
let gg = new binaryTreeNode(54);
let hh = new binaryTreeNode(67);
let ii = new binaryTreeNode(8);
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

console.log(secondLargestInBinarySearchTree(aa));

let aaa = new binaryTreeNode(50);
let bbb = new binaryTreeNode(30);
let ccc = new binaryTreeNode(80);
let ddd = new binaryTreeNode(20);
let eee = new binaryTreeNode(40);
let fff = new binaryTreeNode(70);
let ggg = new binaryTreeNode(90);

aaa.left = bbb;
aaa.right = ccc;
bbb.left = ddd;
bbb.right = eee;
ccc.left = fff;
ccc.right = ggg;

console.log(secondLargestInBinarySearchTree(aaa));

// If we are going to firs try to solve finding the largest item in BST,
// we need to look at the right sub-tree as those are always bigger than root.
// If there is no right sub-tree then our root would be the highest. 

// Example 1
//             50
//           /    \
//         17      72
//        / \      / \
//      12   23  54   76
//     / \   /     \   
//    9  14 19     67

// Example 2
//              (5)
//            /     \
//          (3)     (8)
//         /  \     /  \
//        (1)(4)  (7)(12)
//                   /
//                (10)
//                /  \
//              (9) (11)

// We can start by checking that if current node does not have a left then we keep going as far right as we 
// can until we find the lead node then we return its parent as the second largest element. 
// If there is a left and there is no right side then we find the largest of the left subtree from right sub tree
// that becomes the second largest.
// if we hit a node and it does not have any children it means we have found the second largest element as in example 2.

let desc = 'full tree';
let treeRoot = new binaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 70, desc);

desc = 'largest has a left child';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 60, desc);

desc = 'largest has a left subtree';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
leftNode = rightNode.insertLeft(60);
leftNode.insertRight(65);
leftNode = leftNode.insertLeft(55);
leftNode.insertRight(58);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 65, desc);

desc = 'second largest is root node';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 50, desc);

desc = 'descending linked list';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 40, desc);

desc = 'ascending linked list';
treeRoot = new binaryTreeNode(50);
rightNode = treeRoot.insertRight(60);
rightNode = rightNode.insertRight(70);
rightNode = rightNode.insertRight(80);
assertEquals(secondLargestInBinarySearchTree(treeRoot), 70, desc);

desc = 'one node tree';
treeRoot = new binaryTreeNode(50);
assertThrowsError(() => secondLargestInBinarySearchTree(treeRoot), desc);

desc = 'when tree is empty';
treeRoot = null;
assertThrowsError(() => secondLargestInBinarySearchTree(treeRoot), desc);

function assertEquals(a, b, desc) {
    if (a === b) {
        console.log(`${desc} ... PASS`);
    } else {
        console.log(`${desc} ... FAIL: ${a} != ${b}`)
    }
}

function assertThrowsError(func, desc) {
    try {
        func();
        console.log(`${desc} ... FAIL`);
    } catch (e) {
        console.log(`${desc} ... PASS`);
    }
}