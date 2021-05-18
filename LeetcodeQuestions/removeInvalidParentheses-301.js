/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    if (!s.length) return [""];
    let res = [];
    
    let leftCount = 0;
    let rightCount = 0;
    
    for (let i = 0; i < s.length; i++) {
        let char  = s[i]
        if (char === "(") {
            leftCount++;
        } else if (char === ")") {
            if (leftCount > 0) {
                leftCount--
            } else {
                rightCount++;
            }
        }
    }
    
    recurse(s, res, "", 0, leftCount, rightCount, 0);
    // return Array.from(res);
    return res;
};

function recurse(s, res, current, idx, leftCount, rightCount, open) {
    if (leftCount < 0 || rightCount < 0 || open < 0) return;
    
    if (idx === s.length) {
        if (leftCount === 0 && rightCount === 0 && open === 0) {
            if (!res.includes(current)) res.push(current);
        }
        return;
    }
    
    if (s[idx] === "(") {
        recurse(s, res, current + "(", idx + 1, leftCount, rightCount, open + 1);
        recurse(s, res, current, idx + 1, leftCount - 1, rightCount, open);
    } else if (s[idx] === ")") {
        recurse(s, res, current + ")", idx + 1, leftCount, rightCount, open - 1);
        recurse(s, res, current, idx + 1, leftCount, rightCount - 1, open);
    } else {
        recurse(s, res, current + s[idx], idx + 1, leftCount, rightCount, open)
    }
}


console.log(removeInvalidParentheses("()())()"))
console.log(removeInvalidParentheses("(a)())()"))
console.log(removeInvalidParentheses(")("))