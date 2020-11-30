function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
};

function insertIntoBST(root, val) {
    let node = root;

    while (node) {
        if (val < node.val) {
            if (node.left) {
                node = node.left;
                continue;
            } else {
                node.left = new TreeNode(val);
                break;
            }
        } else {
            if (node.right) {
                node = node.right;
                continue;
            } else {
                node.right = new TreeNode(val);
                break;
            }
        }
    }
    return root;
}

// Input: root = [4, 2, 7, 1, 3], val = 5
let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(7);
let d = new TreeNode(1);
let e = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

console.log(insertIntoBST(a,5))


