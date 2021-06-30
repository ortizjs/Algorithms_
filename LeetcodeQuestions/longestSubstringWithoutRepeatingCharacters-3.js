/**
 * @param {string} s
 * @return {number}
 * Time: O(n) n for the length of input str.
 * Space: O(min(m,n)). Same as the previous approach.
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    if (!s.length || s === null) return ans;

    let map = new Map();

    for (let i = 0, j = 0; j < s.length; j++) {
        let currentChar = s.charAt(j);
        if (map.has(currentChar)) {
            i = Math.max(map.get(currentChar), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(currentChar, j + 1);
    }
    return ans;
};