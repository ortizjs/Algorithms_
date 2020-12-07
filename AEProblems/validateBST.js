// This is an input class. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function validateBst(tree) {
    // Write your code here.
    // if (!tree) return false;
    let stack = [{ node: tree, lowerRange: -Infinity, upperRange: Infinity }];

    while (stack.length) {
        let { node, lowerRange, upperRange } = stack.pop();
        // return node
        if (node.value < lowerRange || node.value >= upperRange) {
            return false;
        }
        if (node.right) {
            stack.push({ node: node.right, lowerRange: node.value, upperRange: upperRange });
        }
        if (node.left) {
            stack.push({ node: node.left, lowerRange: lowerRange, upperRange: node.value });
        }
    }
    return true
}