function treeHeight(root) {
    if (!root) return -1;
    let rightSum = treeHeight(root.right);
    let leftSum = treeHeight(root.left);
    return Math.max(leftSum, rightSum) + 1;
}


module.exports = {
    treeHeight
};