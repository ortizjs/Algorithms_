/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 * Time: O(2n + m) || O(n + m) where n is the length of S and m is the length of T
 * Space: O(m) where n is the length of string t for the map that we use.
 * 
 */
var minWindow = function(s, t) {
    if (!s.length || !t.length || s === null || t === null) return "";
    let charMap = new Map();

    for (let char of t) {
        if (!charMap.has(char)) {
            charMap.set(char, 0)
        }
        charMap.set(char, charMap.get(char) + 1)
    }

    let i = 0, j = 0, count = charMap.size;
    let left = 0, right = s.length - 1, min = s.length;
    let found = false;

    while(j < s.length) {
        let endChar = s.charAt(j++);
        if (charMap.has(endChar)) {
            charMap.set(endChar, charMap.get(endChar) - 1);
            if (charMap.get(endChar) === 0) count--;
        }

        if (count > 0) continue;

        while (count === 0) {
            let startChar = s.charAt(i++);
            if (charMap.has(startChar)) {
                charMap.set(startChar, charMap.get(startChar) + 1);
                if (charMap.get(startChar) > 0) count++;
            }
        }

        if (j - i < min) {
            left = i;
            right = j;
            min = j - i;
            found = true;
        }
    }
    return !found ? "" : s.slice(left - 1, right);
};

console.log(minWindow("ADOBECODEBANC","ABC"))
console.log(minWindow("a","a"))
console.log(minWindow("a","aa"))