/**
 * @param {string} s
 * @return {boolean}
 * Time: O(n) where n is the length of the input string;
 * Space: O(1) we do use alphabet which is 36 chars long but that will never change so it is fixed at 1. 
 */
var isPalindrome = function(s) {
    let i = 0 ;
    let j = s.length - 1;
    let alphabet = "abcdefghijklmnopqrstuvxywz0123456789";
    
    while (i < j) {
        while (i < j && alphabet.indexOf(s[i].toLowerCase()) === - 1) i++;
        while (i < j && alphabet.indexOf(s[j].toLowerCase()) === - 1) j--;
        if (s.charAt(i).toLowerCase() !== s.charAt(j).toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome("race car"))