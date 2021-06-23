/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 * Time: O (log n)
 * Space: O(1)
 */
var divide = function(dividend, divisor) {
    let halfIntMin = -1073741824;
    
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647
    }
    
    let negatives = 2;
    
    if (dividend > 0) {
        negatives--;
        dividend = -dividend;
    }
    
    if (divisor > 0) {
        negatives--;
        divisor = -divisor;
    }
    
    let quotient = 0;
    
    while (divisor >= dividend) {
        let powerOfTwos = -1;
        let value = divisor;
        
        while (value >= halfIntMin && value + value >= dividend) {
            value += value;
            powerOfTwos += powerOfTwos 
        }
        
        quotient += powerOfTwos
        dividend -= value;
    }
    
    if (negatives !== 1) {
        return -quotient
    }
    return quotient;
};