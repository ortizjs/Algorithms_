var rightSideView = function (root) {
    if (!root) return [];

    let stack = [[root, 0]];
    let visibleNodes = [];

    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0];
        let level = nodePair[1];

        if (!visibleNodes[level]) {
            visibleNodes[level] = node.val;
        }

        if (node.left) stack.push([node.left, level + 1]);
        if (node.right) stack.push([node.right, level + 1]);
    }
    return visibleNodes;
};

