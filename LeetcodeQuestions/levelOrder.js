var levelOrder = function (root) {
    if (!root) return [];

    let stack = [[root, 0]];
    let nodes = [];
    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0]
        let level = nodePair[1]
        if (nodes[level] !== undefined) {
            nodes[level].push(node.val)
        } else {
            nodes[level] = [node.val];
        }
        if (node.right) stack.push([node.right, level + 1])
        if (node.left) stack.push([node.left, level + 1])
    }
    return nodes;
};