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
 * 
 * Time: O(n) where n is the number of nodes in the tree;
 * Space: O(m) m is the length of the queue that holds all the nodes which at most can be logn
 */
var largestValues = function(root) {
    let vals = [];
    if (!root) return vals;
    
    let queue = [[root, 0]];
    
    while (queue.length) {
        let nodePair = queue.shift();
        let node = nodePair[0];
        let row = nodePair[1];
        
        if (vals[row] === undefined || vals[row] < node.val) {
            vals[row] = node.val;
        }
        
        if (node.left) queue.push([node.left, row + 1]);
        if (node.right) queue.push([node.right, row + 1]);
    }
    return vals;
};