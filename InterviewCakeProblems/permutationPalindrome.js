function permutationPalindrome(str){
    let unpaired = new Set()
    for (let i = 0; i < str.length; i++){
        let char = str[i]
        if (unpaired.has(char)) {
            unpaired.delete(char)
        } else {
            unpaired.add(char)
        }
    }
    
    return unpaired.size <= 1
}

console.log(permutationPalindrome('civic'))
console.log(permutationPalindrome('ivicc'))
console.log(permutationPalindrome('civil'))
console.log(permutationPalindrome('mom'))
console.log(permutationPalindrome('dad'))
console.log(permutationPalindrome('father'))