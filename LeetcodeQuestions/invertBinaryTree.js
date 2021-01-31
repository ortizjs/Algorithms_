class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function invertBinaryTree(root) {
    if (!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertBinaryTree(root.left);
    invertBinaryTree(root.right);
    return root;
}