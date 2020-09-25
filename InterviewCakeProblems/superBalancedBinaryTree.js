import binaryTreeNode from "./binaryTreeNode";

function superBalanced(root) {
    if (root === null) {
        return true;
    }

    let depths = [];
    let nodes = [];
    nodes.push([root, 0])
    while (nodes.length) {
        let nodePair = nodes.pop();
        let node = nodePair[0];
        let depth = nodePair[1];;

        if (!node.left && !node.right) {
            if (depths.indexOf(depth) === -1) {
                depths.push(depth);

                if (depths.length > 2 || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                    return false;
                }
            }
        } else {
            if (node.left) {
                nodes.push([node.left, depth + 1])
            }
            if (node.right) {
                nodes.push([node.right, depth + 1])
            }
        }
    }
    return true;
}