function treeSum(root) {
    if (!root) return 0;
    return treeSum(root.left) + root.val + treeSum(root.right);
    // let sum = root.val;
    // if (root.left) sum += treeSum(root.left);
    // if (root.right) sum += treeSum(root.right);
    // return sum;
    
}


module.exports = {
    treeSum
};