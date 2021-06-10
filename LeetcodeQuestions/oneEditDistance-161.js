/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Time: O(n) for worse case and O(1) for best case;
 * Space: O(n) since we are slicing the strings when the chars are different
 */
var isOneEditDistance = function(s, t) {
    let sLen = s.length;
    let tLen = t.length;

    if (sLen > tLen) return isOneEditDistance(t,s);
    if (tLen - sLen >= 2) return false;

    for (let i = 0; i < sLen; i++) {
        if (s.charAt(i) !== t.charAt(i)) {
            if (sLen === tLen) {
                return s.slice(i + 1) === t.slice(i + 1);
            } else {
                return s.slice(i) === t.slice(i + 1);
            }
        }
    }
    return tLen - 1 === sLen
};