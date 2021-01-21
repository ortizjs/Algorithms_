var isValid = function (s) {
    if (!s.length) return true;
    if (s.length === 1) return false;
    let braces = { '(': ')', '{': '}', '[': ']' }
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        if (char in braces) {
            stack.push(char)
        } else {
            let lastOpen = stack.pop()
            if (char !== braces[lastOpen]) return false;
        }
    }

    return !stack.length
};