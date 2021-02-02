class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root, sum = 0, sums = []) {
    if (!root) return;
    sum += root.val;
    if (!root.left && !root.right) {
        sums.push(sum);
    }
    branchSums(root.left, sum, sums);
    branchSums(root.right, sum, sums)
    return sums;

}