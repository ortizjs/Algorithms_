var evalRPN = function (tokens) {
    let stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        let num1;
        let num2;
        switch (token) {
            case "+":
                stack.push(stack.pop() + stack.pop())
                break;
            case "-":
                num2 = stack.pop();
                num1 = stack.pop();
                stack.push(num1 - num2)
                break;
            case "*":
                stack.push(stack.pop() * stack.pop())
                break;
            case "/":
                num2 = stack.pop();
                num1 = stack.pop();
                let num3 = num1 / num2
                stack.push(num3 > 0 ? Math.floor(num3) : Math.ceil(num3));
                break;
            default:
                stack.push(parseInt(token))
        }
    }
    return stack.pop()
};

console.log(evalRPN(["2", "1", "+", "3", "*"]))
console.log(evalRPN(["4", "13", "5", "/", "+"]))
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))