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
 * @return {number}
 * Time: O(n) as we have to visit all nodes in the tree;
 * space: O(n) for the recursive call stack
 */
var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;

    function dfs(node) {
        if (!node) return 0;
        let leftLen = dfs(node.left)
        let rightLen = dfs(node.right);
        let branchesSum = leftLen + rightLen;
        maxDiameter = Math.max(maxDiameter, branchesSum)

        return Math.max(leftLen, rightLen) + 1;
    }
    dfs(root);
    return maxDiameter
};