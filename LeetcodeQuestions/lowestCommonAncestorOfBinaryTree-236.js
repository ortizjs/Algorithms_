/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 
 * 
 * Recursive solution:
 * Time: O(n) where n is the total number of nodes as we potentially have to check each node in order to find p nad q and their lca in worse case the tree is skewed and we hold n nodes at some point.
 * Space: O(n) for the recursive callstack as we traverse the tree.
 * 
 * Iterative solution:
 * Time: O(n) where n is the total number of nodes as we potentially have to check each node in order to find p and q and their lca in worse case.
 * 
 * Space: (n) for the stack we utilize to traverse the node and for the parentMap to store all nodes and their parents and the ancestor set. Worse case the tree is skewed and we hold n nodes at some point.
 */


/// Recursive Solution:

var lowestCommonAncestor = function(root, p, q) {
    let lca = null;

    function dfs(node,p,q) {
        if (!node) return 0;

        let left = dfs(node.left,p,q) ? 1 : 0;
        let right = dfs(node.right,p,q) ? 1 : 0;
        let mid = (node === p) || (node === q) ? 1 : 0;
        if ((left + mid + right) >= 2) lca = node;

        return (left + mid + right) > 0;
    }

    dfs(root,p,q)
    return lca;
};

var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    let parentMap = new Map();
    parentMap.set(root,null);
    let stack = [root];

    while (!parentMap.has(p) || !parentMap.has(q)) {
        let node = stack.pop();

        if (node.left) {
            parentMap.set(node.left, node);
            stack.push(node.left)
        }
        if (node.right) {
            parentMap.set(node.right, node);
            stack.push(node.right);
        }
    }

    let ancestorSet = new Set();

    while (p) {
        ancestorSet.add(p);
        p = parentMap.get(p);
    }

    while (!ancestorSet.has(q)) {
        q = parentMap.get(q);
    }

    return q;
};