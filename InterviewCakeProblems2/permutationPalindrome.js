function permutationPalindrome(inputStr) {
    let nonRepeated = new Set();

    for (let i = 0; i < inputStr.length; i++) {
        let currentChar = inputStr[i];
        if (!nonRepeated.has(currentChar)) {
            nonRepeated.add(currentChar);
        } else {
            nonRepeated.delete(currentChar);
        }
    }
    return nonRepeated.size <= 1;
};

console.log(permutationPalindrome("civic")); //should return true
console.log(permutationPalindrome("ivicc")); //should return true
console.log(permutationPalindrome("civil")); //should return false
console.log(permutationPalindrome("livci")); //should return false