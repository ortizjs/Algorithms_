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
 * @return {void} Do not return anything, modify root in-place instead.
 * Recursive solution:
 * Time: O(n) where n is the total number of nodes in the tree as we have to visit all nodes in order to reorder/flatten.
 * Space: O(n) for the recursive call stack;
 * 
 * Iterative Solution:
 * Time: O(n) where n is the total number of nodes in three as we have to visit all nodes in order to reorder/flatten.
 * Space: O(n) for the stack data structures used to keep nodes. The problem does not mention the tree being balanced so the tree could be
 *              left skewed and therefore hold most of n nodes. 
 */

// Recursive solution

function flattenTree(node) {
    // Need to handle edge case of node being null
    if (!node) return null;

    // Need to handle leaf nodes and return node itself.
    if (!node.left && !node.right) return node;

    // Need to flatten leftSubTree and rightSubTree recursively.
    let leftTail = flattenTree(node.left);
    let rightTail = flattenTree(node.right);

    // if leftSubTree or leftTail exists, need to reassign pointers:
    if (leftTail !== null) {
        leftTail.right = node.right;
        node.right = node.left;
        node.left = null;
    }

    // Need to return the "right most node"
    return rightTail === null ? leftTail : rightTail
}

var flatten = function(root) {
    flattenTree(root)
}


/// Iterative Solution
var flatten = function(root) {
    
    //Handle the null scenario
    if (!root) return null;
    
    let tailNode = null;
    let start = 1, end = 2;
    
    
    let stack = [[root, start]]
    
    while (stack.length) {
        let nodePair = stack.pop();
        let node = nodePair[0];
        let state = nodePair[1];
        
        // We reached a lead node. Record this node as the current tailNode and move on.
        if (!node.left && !node.right) {
            tailNode = node;
            continue;
        }
        
        // If current node not a lead node and its current state is in start, it means that 
        // we still have not proccessed its left child yet.
        if (state === start) {
            
            // If the current Node has a left child, we add it to the stack after adding the current node
            // again but now in end state
            if (node.left !== null) {
                stack.push([node, end])
                stack.push([node.left, start])
            } else if (node.right !== null) {
                //In case the current node did not have a left child
                // we will add its right child to the stack with start state.
                stack.push([node.right, start])
            }
        } else {
            //If the current node is in the end state, that means we have process one of its children
            // left if it existed, otherwise right.
            let rightNode = node.right;
            
            // If there was a left child, there must have been a leaf node and so, we would have
            // set that as the tailNode.
            if (tailNode !== null) {
                
                // Stablish the proper connections or reassing pointers
                tailNode.right = node.right;
                node.right = node.left;
                node.left = null;
                rightNode = tailNode.right;
            }
            
            if (rightNode !== null) {
                stack.push([rightNode, start])
            }
        }
        
    }
};