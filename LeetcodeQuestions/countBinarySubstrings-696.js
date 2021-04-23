var countBinarySubstrings = function(s) {
    let counter = 0;
    if (s.length === 1) return 0;
    
    let prevBlock = 0;
    let currentBlock = 1;
    let currentChar = s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (currentChar === s.charAt(i)) {
            currentBlock++;
        } else {
            counter += Math.min(currentBlock, prevBlock);
            prevBlock = currentBlock;
            currentBlock = 1;
        }
        currentChar = s.charAt(i);
    }
    
    counter += Math.min(currentBlock, prevBlock);
    return counter;
};

console.log(countBinarySubstrings("00110011"))
console.log(countBinarySubstrings("10101"))