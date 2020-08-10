function reverseStrInPlace(str){
    let chars = str.split("");
    let lower = 0;
    let upper = chars.length - 1;
    while (lower < upper){
        let temp = chars[lower];
        [chars[lower], chars[upper]] = [chars[upper], temp]
        lower++
        upper--
    }
    return chars.join("")
}

console.log(reverseStrInPlace("Jonnatan"))
console.log(reverseStrInPlace("Andrea"))
console.log(reverseStrInPlace("Doby"))