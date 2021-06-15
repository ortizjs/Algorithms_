/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Recursive:
 * Time: O(n) where n is the number of nodes in the tree;
 * Space: O(n) n for the recursice call stack frames for each node.
 * 
 * Iterative:
 * Time: O(n) since we have to visit all the nodes in the tree
 * Space: O(n) since we keep upto all nodes in the tree in the "stack array"
 */

function validate(root, lower = null, upper = null) {
    if (!root) return true;
    if ((lower !== null && root.val <= lower) || (upper !== null && root.val >= upper)) return false;
    return validate(root.left, lower, root.val) && validate(root.right, root.val, upper)
}

var isValidBST = function(root) {
    return validate(root, null, null);
};

var isValidBST = function(root) {
    if (!root) return true;
    let stack = [[root, null, null]];
    
    while (stack.length) {
        let nodeAndRanges = stack.pop();
        let node = nodeAndRanges[0], lower = nodeAndRanges[1], upper = nodeAndRanges[2];
        if ((lower !== null && node.val <= lower) || (upper !== null && node.val >= upper)) return false;
        if (node.right) stack.push([node.right, node.val, upper]);
        if (node.left) stack.push([node.left, lower, node.val])
    }
    return true
};