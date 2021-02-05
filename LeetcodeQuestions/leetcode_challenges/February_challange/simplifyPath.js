function simplifyPath(path) {
    let stack = [];
    let chars = path.split("/");
    let conPath = "/";
    let special = new Set([".", "..", ""]);

    for (let char of chars) {
        if (stack.length && char === "..") {
            stack.pop();
        } else if (!special.has(char)) {
            stack.push(char);
        }
    }
    return conPath += stack.join("/");
}

console.log(simplifyPath("/home/"))
console.log(simplifyPath("/../"))
console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/a/./b/../../c/"))