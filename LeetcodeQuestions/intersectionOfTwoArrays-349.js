/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * Time: O(m + n) O(n) time is used to convert nums1 to a set and similarly with nums2.
 * Space: O(m + 1) in the worst case when all elements in the arrays are different.
 */
var intersection = function(nums1, nums2) {
    let res = new Set();
    let n = Math.min(nums1.length, nums2.length);
    
    for (let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            res.add(nums1[i])
        }
    }
    return Array.from(res)
};