var removeDuplicates = function(s, k) {
    let main = [];
    
    
    for (let char of s) {
        if (main.length && main[main.length - 1][0] === char) {
            main[main.length - 1][1]++;
        } else {
            main.push([char, 1])
        }
        
        if (main[main.length - 1][1] === k) {
            main.pop()
        }
    }
    let res = ""
    while (main.length > 0) {
        let top = main.pop();
        while (top[1] > 0) {
            res = top[0] + res
            top[1]--;
        }
    }
    return res
};

console.log(removeDuplicates("abcd", 2))
console.log(removeDuplicates("deeedbbcccbdaa", 3))
console.log(removeDuplicates("pbbcggttciiippooaais", 2))