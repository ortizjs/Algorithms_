/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 
 * Time: O(n + m) where n and m are the lengths of the array. We iterate through the first
 * and then through the second. Insert and look up operations in hashmap take linear time.
 * Space: O(min(n,m)) as we use the size of smaller array to create the map.
 */
var intersect = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        return intersect(nums2, nums1);
    }

    let map  = {};

    for (let num of nums1) {
        if (map[num] === undefined) {
            map[num] = 0;
        }
        map[num]++;
    }

    let k = 0;
    for (let num of nums2) {
        let count = map[num] !== undefined ? map[num] : 0;
        if (count > 0) {
            nums1[k] = num;
            map[num]--;
            k++;
        }
    }

    return nums1.slice(0,k)
};