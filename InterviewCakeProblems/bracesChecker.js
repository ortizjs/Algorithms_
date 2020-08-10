function braces(values) {
    let hash = { '(': ')', '[': ']', '{': '}' };
    let openLeft = [];
    for (let i = 0; i < values.length; i++) {
        let currentChar = values[i]
        if (hash[currentChar] !== undefined) {
            openLeft.push(currentChar);
        } else {
            let currOpen = openLeft.pop();
            if (hash[currOpen] !== currentChar) {
                return false;
            }
        }
    }
    if (openLeft.length !== 0) {
        return "NO"
    }
    return "YES"
}
