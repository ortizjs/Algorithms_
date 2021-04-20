/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    if (!root) return [];
    let stack = [root];
    let res = [];
    
    while (stack.length) {
        let node = stack.pop();
        if (node === null) continue;
        res.push(node.val);
        if (node.children.length) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i])
            }
        }
    }
    return res;
};