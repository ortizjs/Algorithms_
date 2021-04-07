function isVowel(char) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    return vowels.has(char);
}
var halvesAreAlike = function(s) {
    let aCount = 0;
    let bCount = 0;
    let i = 0;
    let j = s.length - 1;
    let midIdx = Math.floor((s.length - 1)/2)
    
    while (i <= midIdx && j > midIdx) {
        if (isVowel(s[i])) aCount++;
        if (isVowel(s[j])) bCount++;
        i++;
        j--;
    }
    return aCount === bCount;
};

console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))
console.log(halvesAreAlike("MerryChristmas"))
console.log(halvesAreAlike("AbCdEfGh"))