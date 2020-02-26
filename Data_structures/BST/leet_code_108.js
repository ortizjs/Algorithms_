// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;
    let midIdx = Math.floor(nums.length / 2);
    let rootVal = nums[midIdx];
    let root = new TreeNode(rootVal);
    let leftVals = nums.slice(0, midIdx);
    let rightVals = nums.slice(midIdx + 1);
    let leftTree = sortedArrayToBST(leftVals);
    let rightTree = sortedArrayToBST(rightVals);
    root.left = leftTree;
    root.right = rightTree;
    return root;
};