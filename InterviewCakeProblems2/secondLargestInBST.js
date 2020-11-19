const binaryTreeNode = require("./binaryTreeNode")
// As with any other tree problem we need to iterate over the nodes to find the second largest...
// Since we need the second largest and we know that the bst is order, we can directly ignore the left side of the tree and look at the 
// right side only... 
// One good approach which seems easer than the one needed which would be a good first step is to find the largest element in the right subtree.
// One way to do that is to do DFS starting with the root's right side. 

//This is InterviewCake's implementation recursively.
// function largestInBST(root) {
//     if (!root) throw new Error("There must be at least one node");
//     if (root.right) {
//         return largestInBST(root.right)
//     }
//     return root.value
// }

// function secondLargestInBST(root) {
//     if (!root || !root.left && !root.right) throw new Error("Tree must contain at least 2 nodes!")

//     if (!root.right && root.left) {
//         return largestInBST(root.left)
//     }
//     if (root.right && !root.right.left && !root.right.right) {
//         return root.value
//     }
//     return secondLargestInBST(root.right)
// }

//InterviewCake's iterative solution:

// function findLargestInBST(root) {
//     if (!root) throw new Error("Tree must contain at least one node!")

//     let node = root
//     while (node){
//         if (!node.right) {
//             return node.value
//         }
//         node = node.right
//     }
// }

// function secondLargestInBST(root) {
//     if (!root || !root.left && !root.right) throw new Error("Tree must have at least 2 nodes!")

//     let node = root;
//     while (node) {
//         if (!node.right && node.left) {
//             return findLargestInBST(node.left)
//         }
//         if (node.right && !node.right.left && !node.right.right) {
//             return node.value
//         }
//         node = node.right
//     }
// }

// This is my implementation
function secondLargestInBST(root) {
    if (!root || !root.left && !root.right) throw new Error("Tree must contain at least two node")
    let stack = [root];
    let largest = 0;
    let secondLargest = 0
    while (stack.length) {
        let node = stack.pop();
        secondLargest = Math.min(largest, node.value)
        largest = Math.max(node.value, largest);
        if (!node.right) {
            if (node.left) {
                if (node.left.right) {
                    secondLargest = node.left.right.value
                } else {
                    secondLargest = node.left.value
                }
            }
        } else {
            stack.push(node.right);
        }
    }
    return secondLargest
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

console.log(secondLargestInBST(a));

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

console.log(secondLargestInBST(aa));

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

console.log(secondLargestInBST(aaa));

let desc = 'full tree';
let treeRoot = new binaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(secondLargestInBST(treeRoot), 70, desc);
desc = 'largest has a left child';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
assertEquals(secondLargestInBST(treeRoot), 60, desc);
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
assertEquals(secondLargestInBST(treeRoot), 65, desc);
desc = 'second largest is root node';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
rightNode = treeRoot.insertRight(70);
assertEquals(secondLargestInBST(treeRoot), 50, desc);
desc = 'descending linked list';
treeRoot = new binaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(secondLargestInBST(treeRoot), 40, desc);
desc = 'ascending linked list';
treeRoot = new binaryTreeNode(50);
rightNode = treeRoot.insertRight(60);
rightNode = rightNode.insertRight(70);
rightNode = rightNode.insertRight(80);
assertEquals(secondLargestInBST(treeRoot), 70, desc);
desc = 'one node tree';
treeRoot = new binaryTreeNode(50);
assertThrowsError(() => secondLargestInBST(treeRoot), desc);
desc = 'when tree is empty';
treeRoot = null;
assertThrowsError(() => secondLargestInBST(treeRoot), desc);
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