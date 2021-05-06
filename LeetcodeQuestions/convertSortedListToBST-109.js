/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function convertToArr(root) {
    let nodes = [];
    
    while (root !== null) {
        nodes.push(root.val);
        root = root.next;
    }
    return nodes;
}

function constructBST(nums) {
    if (!nums.length) return null;
    
    let midIdx = Math.floor(nums.length/2);
    let midVal = nums[midIdx]
    let rootNode = new TreeNode(midVal)
    let leftSubTree = nums.slice(0,midIdx);
    let rightSubTree = nums.slice(midIdx + 1);
    rootNode.left = constructBST(leftSubTree);
    rootNode.right = constructBST(rightSubTree);
    return rootNode;
}
var sortedListToBST = function(head) {
    if (!head) return null;
    let values = convertToArr(head);
    return constructBST(values);
};

