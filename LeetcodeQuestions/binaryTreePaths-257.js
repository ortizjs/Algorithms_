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
 * @return {string[]}
 * 
 * Time: O(n) where n is the number of nodes in the tree as we have to visit each node at most once to construct the paths.
 * Space: O(n) for the call stack frames used during the recursive steps and the paths array to store the answers.
 */

function dfs(node, path, paths) {
    if (node) {
        path += node.val
        if (!node.left && !node.right) {
            paths.push(path)
        } else {
            path += "->"
            dfs(node.left,path,paths)
            dfs(node.right,path,paths)
        }
    }
}
var binaryTreePaths = function(root) {
    let paths = [];
    dfs(root, "", paths)
    return paths;
};