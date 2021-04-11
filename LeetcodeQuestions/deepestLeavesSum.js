function treeDepth(root) {
    if (!root) return 0;
    let leftSubDepth = treeDepth(root.left);
    let rightSubDepth = treeDepth(root.right);
    return Math.max(leftSubDepth, rightSubDepth) + 1;
}

var deepestLeavesSum = function(root) {
    if (!root) return 1;
    let sum = 0;
    let maxDepth = treeDepth(root);
    let queue = [[root, 1]];
    
    while (queue.length) {
        let nodePair = queue.shift();
        let node = nodePair[0];
        let depth = nodePair[1];
        if (depth === maxDepth) sum += node.val;
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
    return sum
};