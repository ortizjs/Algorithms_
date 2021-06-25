/**
 * @param {string} s
 * @return {number}
 * Time: O(n) where n is the length of the input string
 * Space: O(n) the stack can get as deep as the length of the input string.
 */
var longestValidParentheses = function(s) {
    let stack = [-1];
    let maxLen = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "(") {
            stack.push(i);
        } else{
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
            }
        }
    }
    return maxLen;
};