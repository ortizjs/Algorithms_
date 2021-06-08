/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 * Time: O(n*k) where n is the length of the input string.
 * Space: O(k) where k is the size of the map === k.
 * 
 */
function lengthOfLongestSubstringKDistinct(s,k) {
     let n = s.length;
    if (k * n === 0) return 0;
    
    let left = 0;
    let right = 0;
    let maxLen = 1;
    let map = new Map();


    while (right < n) {
        map.set(s.charAt(right), right);

        if (map.size === k + 1) {
            let minIdx = Math.min(...map.values());
            map.delete(s.charAt(minIdx));
            left = minIdx + 1;
        }
        right++;
        maxLen = Math.max(maxLen, right - left)
    }
    return maxLen
}



/**
 * Timne: O(n) slight improvement as we do not need to iterate over the values of the map, we simply use the left most key,val pair
 * space: O(k)
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let n = s.length;
    if (n * k === 0) return 0;
    let left = 0, right = 0, maxLen = 1;
    let map = new Map();
    
    while (right < n) {
        let char = s.charAt(right);
        if (map.has(char)) map.delete(char);
        map.set(char, right++);
        
        if (map.size === k + 1) {
            let leftMost = map.entries().next()
            map.delete(leftMost.value[0])
            left = leftMost.value[1] + 1
        }
        maxLen = Math.max(maxLen, right - left)
    }
    return maxLen;
};