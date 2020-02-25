var buildTree = function (inorder, postorder) {
    if (postorder.length === 0 || inorder.length === 0) return null;
    let rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal);
    let midIndex = inorder.indexOf(rootVal);
    let leftInorder = inorder.slice(0, midIndex);
    let rightInorder = inorder.slice(midIndex + 1);
    let leftPostorder = postorder.filter((val) => leftInorder.includes(val));
    let rightPostorder = postorder.filter((val) => rightInorder.includes(val));
    let leftTree = buildTree(leftInorder, leftPostorder);
    let rightTree = buildTree(rightInorder, rightPostorder);

    root.left = leftTree;
    root.right = rightTree;

    return root;
};