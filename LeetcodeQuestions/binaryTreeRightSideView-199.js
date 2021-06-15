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
 * @return {number[]}
 * 
 * Time: O(n) where n is the number of nodes in the tree... since in the worse case scenario we might have to checkout all of the nodes in the tree.
 * Space: O(D) to keep the queues, where D is a tree diameter. Let's use the last level to estimate the queue size. This level could contain up to N/2 tree nodes in the case of complete binary tree.
 */
var rightSideView = function(root) {
    let nodes = [];
    if (!root) return nodes;
    
    let queue = [[root, 0]];
    
    while (queue.length) {
        let nodePair = queue.shift();
        let node = nodePair[0];
        let level = nodePair[1];
        
        if (!nodes[level]) nodes[level] = node.val;
        if (node.right) queue.push([node.right, level + 1])
        if (node.left) queue.push([node.left, level + 1])
    }
    return nodes;
};