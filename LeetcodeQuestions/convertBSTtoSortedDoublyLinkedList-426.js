/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */

/**
 * @param {Node} root
 * @return {Node}
 * 
 * Time: O(n) where n is the number of nodes in the BST as we have to visit every node at least once to correctly reset pointers.
 * Space:  O(n) for the recursive call stack as we traverse the BST. Best case it coulf be O(log n) for balanced BST worst case O(n) for skewed tree.
 */
var treeToDoublyList = function(root) {
  if (!root) return root;
  let first = null, last = null;
  
  function dfs(node) {
      if (node !== null) {
          dfs(node.left);
          if (last !== null) {
              last.right = node;
              node.left = last;
          } else {
              first = node;
          }
          last = node;
          dfs(node.right)
      }
  }

  dfs(root);
  first.left = last;
  last.right = first;
  return first
};