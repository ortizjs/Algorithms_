/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n) where n is the length of the input string.
 * Space: O(1) no additional space used.
 */
var validPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;
    
    while (i < j) {
        if (s.charAt(i) !== s.charAt(j)) {
            return isPalindrome(s, i + 1, j) || isPalindrome(s, i , j - 1)
        }
        i++;
        j--;
    }
    return true;
};

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s.charAt(i++) !== s.charAt(j--)) {
            return false;
        }
    }
    return true;
}

console.log(validPalindrome("aba"))
console.log(validPalindrome("abca"))
console.log(validPalindrome("abc"))