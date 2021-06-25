/**
 * @param {string} s
 * @return {string}
 * Time: O(n^2) this is the best that can be achieved.
 * Time: O(1)
 */
var longestPalindrome = function(s) {
    if (s === null || !s.length) return "";
    
    let start = 0, end = 0;
    
    for (let i = 0; i < s.length; i++) {
        let len1 = expandFromMiddle(s,i,i);
        let len2 = expandFromMiddle(s,i,i+1);
        let maxLen = Math.max(len1, len2);
        if (maxLen > end - start) {
            start = i - Math.floor((maxLen - 1)/2);
            end = i + Math.floor(maxLen/2);
        }
    }
    return s.substring(start, end + 1);
};

function expandFromMiddle(s, left, right) {
    if (s === null || left > right) return 0;
    
    while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
        left--;
        right++;
    }
    
    return right - left - 1;
}