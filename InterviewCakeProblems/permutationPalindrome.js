function permutationPalindrome(str){
   let distinctChars = new Set();

   for (let i = 0; i < str.length; i++) {
       let currentChar = str[i];
       if (distinctChars.has(currentChar)) {
           distinctChars.delete(currentChar);
       } else {
           distinctChars.add(currentChar)
       }
   }
   return distinctChars.size <= 1
}

console.log(permutationPalindrome('civic'))
console.log(permutationPalindrome('ivicc'))
console.log(permutationPalindrome('civil'))
console.log(permutationPalindrome('mom'))
console.log(permutationPalindrome('dad'))
console.log(permutationPalindrome('father'))