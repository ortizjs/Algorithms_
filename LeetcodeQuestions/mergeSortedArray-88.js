/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * Time: O(n + m) as we potentially need to traverse both array for which nums1.lenth === m and nums2.lenth === n;
 * Space: O(1) as there is no additional copied array, we do it inplace; 
 */
var merge = function(nums1, m, nums2, n) {
    m--;
    n--;
    let idx = nums1.length - 1;
    while (m >= 0 || n >= 0) {
        if (m < 0) {
            nums1[idx] = nums2[n];
            n--;
        } else if (n < 0) {
            nums1[idx] = nums1[m];
            m--;
        } else {
            if (nums1[m] <= nums2[n]) {
                nums1[idx] = nums2[n]
                n--;
            } else {
                nums1[idx] = nums1[m];
                m--;
            }
        }
        idx--;
    }
};

console.log(merge([1,2,3,0,0,0], 1, [2,5,6], 3))

