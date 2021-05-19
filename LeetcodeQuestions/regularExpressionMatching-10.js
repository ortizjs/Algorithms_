/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    if (!p.length) return !s.length;
    
    let firstMatch = (!!s.length && (p.charAt(0) === s.charAt(0) || p.charAt(0) === "."));
    
    
    if (p.length >= 2 && p.charAt(1) === "*") {
        return (isMatch(s, p.slice(2)) || (firstMatch && isMatch(s.slice(1), p)))
    } else {
        return (firstMatch && isMatch(s.slice(1), p.slice(1)))
    }
};

console.log(isMatch("aa", "a"))
console.log(isMatch("aa", "a*"))
console.log(isMatch("ab", ".*"))
console.log(isMatch("aab","c*a*b"))
console.log(isMatch("mississippi","mis*is*p*."))