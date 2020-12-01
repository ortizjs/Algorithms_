// AE's solution which is recursive approach with O(log(n)) time abd O(log(n)) space as well on average.
// worst time being O(n) and O(n) space

const { node } = require("prop-types");

function findClosesValueInBST(tree, target) {
    return closesValueInBst(tree, target, tree.value);
}

function closesValueInBst(tree, target, closest) {
    if (!tree) return closest;

    if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
        closest = tree.value;
    };

    if (tree.value <= target) {
        return closestValueInBst(tree.right, target, closest);
    } else {
        return closestValueInBst(tree.left, target, closest);
    }
}

// AE Iterative solution
// Average: O(log(n)) time | O(1) Space
// Worst : O(n) time | O(1) Space:

function findClosestValueInBst(tree, target) {
    return findClosestValueInBstHelper(tree, target, tree.value);
}

function findClosestValueInBstHelper(tree, target, closest) {
    let currentNode = tree;

    while (currentNode) {
        if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
            closest = currentNode.value;
        }
        if (target < currentNode.value) {
            currentNode = currentNode.left;
        } else if (target > currentNode.value) {
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
    return closest;
}



// My solution which turned out to be iterative solution. Took this approach because although a recursive solution might come out and look cleaner
// I would rather avoid the cost of memory taken by the recursive call stack.
// My solution would be O(log(n)) where n is the total number of nodes in the tree and the space would be O(log(n)) as well. on average.
// Worst time would be O(n) time and space.

function findClosestValueInBst(tree, target) {
    let root = tree;
    let Abs = Math.abs(target - root.value);
    let nodeVal = root.value;
    let queue = [root];

    while (queue.length) {
        let node = queue.pop();
        let currentDiff = Math.abs(target - node.value)
        if (currentDiff <= Abs) {
            Abs = currentDiff
            nodeVal = node.value;
        }
        if (node.left && node.value >= target) queue.unshift(node.left);
        if (node.right && node.value < target) queue.unshift(node.right);
    }
    return nodeVal
}