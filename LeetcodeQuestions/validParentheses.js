function balancedParentheses(input) {
    let open = { "(": ")", "[": "]", "{": "}" }
    let stack = [];

    for (let char of s) {
        if (char in open) {
            stack.push(char)
        } else {
            if (stack.length === 0) {
                return false;
            }
            let currOpen = stack.pop();
            if (open[currOpen] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(balancedParentheses())