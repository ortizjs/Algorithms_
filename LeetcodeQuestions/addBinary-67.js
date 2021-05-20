/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = 0;
    let carry = 0;
    let builder = [];
    
    let i = a.length - 1;
    let j = b.length - 1;
    
    while (i >= 0 || j >= 0) {
        sum = carry;
        
        if (i >= 0) {
            sum += a[i] - "0";
            i--;
        }
        
        if (j >= 0){
            sum += b[j] - "0";
            j--;
        }
        builder.unshift(sum % 2);
        carry = Math.floor(sum/2);
    }
    
    if (carry > 0) {
        builder.unshift(1);
    }
    return builder.join("");
};

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
