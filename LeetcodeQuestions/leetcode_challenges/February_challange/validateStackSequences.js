var validateStackSequences = function (pushed, popped) {
    let i = 0;
    let j = 0;
    let stack = [];

    while (j < pushed.length) {
        if (popped[j] === stack[stack.length - 1]) {
            stack.pop();
            j++;
        } else if (i < pushed.length) {
            stack.push(pushed[i]);
            i++
        } else {
            return false;
        }
    }
    return true
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));