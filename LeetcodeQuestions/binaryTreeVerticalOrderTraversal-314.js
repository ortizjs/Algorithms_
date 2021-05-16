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
 * @return {number[][]}
 */

var verticalOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [[root, 1]];
    let map = {};
    
    while (queue.length) {
        let nodePair = queue.shift();
        let node = nodePair[0];
        let col = nodePair[1];
        if (node !== null) {
            if (!map.hasOwnProperty(col)) {
                map[col] = []
            }
            map[col].push(node.val);
            
            if (node.left) queue.push([node.left, col - 1]);
            if (node.right) queue.push([node.right, col + 1]);
        }
    }
    let sortedKeys = Object.keys(map).sort((a,b) => a - b)

    for (let k of sortedKeys) {
        res.push(map[k])
    }    
    return res;
};