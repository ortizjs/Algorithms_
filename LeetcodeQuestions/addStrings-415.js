/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let res = [];
    let carry = 0;
    
    while (len1 >= 0 || len2 >= 0) {
        let char1 = num1[len1] ? num1[len1] : "0";
        let char2 = num2[len2] ? num2[len2] : "0";
        
        let sum = (char1.charCodeAt() - 48) + (char2.charCodeAt() - 48) + carry;
        carry = Math.floor(sum/10);
        res.unshift(String.fromCharCode(sum % 10 + 48));
        len1--;
        len2--;
    }
    
    if (carry > 0) {
        res.unshift(carry)
    }
    return res.join("");
};
console.log(addStrings("11", "123"))
console.log(addStrings("456", "77"))
console.log(addStrings("0", "0"))