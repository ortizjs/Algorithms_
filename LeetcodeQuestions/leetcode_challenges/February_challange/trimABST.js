function trimABST(root, low, high) {
    if (!root) return root;
    if (root.val < low) return trimABST(root.right, low, high)
    if (root.val > high) return trimABST(root.left, low, high);
    root.left = trimABST(root.left, low, high)
    root.right = trimABST(root.right, low, high);
    return root;
}