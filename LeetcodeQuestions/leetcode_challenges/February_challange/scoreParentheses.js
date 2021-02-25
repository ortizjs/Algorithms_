function scoreOfParentheses(S) {
    let score = 0;
    let stack = [];

    for (let char of S) {
        if (char === "(") {
            stack.push(score);
            score = 0;
        } else {
            score = stack.pop() + Math.max(score * 2, 1)
        }
    }
    return score;
};

console.log(scoreOfParentheses("()"))
console.log(scoreOfParentheses("(())"))
console.log(scoreOfParentheses("()()"))
console.log(scoreOfParentheses("(()(()))"))