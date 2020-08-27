function reverseStrInPlace(str){
   let inputStr = str.split("");
   let start = 0;
   let end = inputStr.length - 1;
   let temp;
   while (start < end) {
       temp = inputStr[start];
       inputStr[start] = inputStr[end];
       inputStr[end] = temp;
       start++;
       end--;
   }
   return inputStr.join("")
}

console.log(reverseStrInPlace("Jonnatan"))
console.log(reverseStrInPlace("Andrea"))
console.log(reverseStrInPlace("Doby"))