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
 * Time: O(n) where n is the total number of nodes in the tree as we have to visit each individual node.
 * Space: O(n) for the hashmap and the queue used to traverse the tree.
 */

var verticalOrder = function(root) {
    if (!root) return [];
    let res = [];
    let queue = [[root, 0]];
    let map = {};
    let min = 0, max = 0;
    while (queue.length) {
        let nodePair = queue.shift();
        let node = nodePair[0];
        let col = nodePair[1];
        if (node !== null) {
            if (!map.hasOwnProperty(col)) {
                map[col] = []
            }
            map[col].push(node.val);
            
            if (node.left) {
                queue.push([node.left, col - 1]);
                min = Math.min(min, col - 1);
            }

            if (node.right) {
                queue.push([node.right, col + 1]);
                max = Math.max(max, col + 1);
            }
        }
    }

    for (let k = min; k <= max; k++) {
        res.push(map[k])
    }    
    return res;
};