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
 * Time: O(n) where n is the number of nodes in the tree
 * Space: O(h) where h is the height of the tree which counts the recursion stack. In the worst case the tree is not balanced and h = n but best case the tree is balanced the h = log(n)
 */
var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function getMaxSum(node) {
        if (!node) return 0;

        let leftSum = Math.max(getMaxSum(node.left), 0);
        let rightSum = Math.max(getMaxSum(node.right), 0);

        let newPathCost = node.val + leftSum + rightSum;

        maxSum = Math.max(maxSum, newPathCost);

        return node.val + Math.max(leftSum, rightSum);
    }

    getMaxSum(root)
    return maxSum
};