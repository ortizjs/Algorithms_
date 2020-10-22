function reverseStringInPlace(charArr) {
    if (charArr.length < 2) {
        throw new Error("input must have at least 2 chars");
    }

    let start = 0;
    let end = charArr.length - 1;

    while (start < end) {
        let temp = charArr[start];
        charArr[start] = charArr[end];
        charArr[end] = temp
        start++;
        end--;
    }
    return charArr;
}

console.log(reverseStringInPlace(['a','b','c','d']))
console.log(reverseStringInPlace(['j','o','n','n','a','t','a','n']))
console.log(reverseStringInPlace(['j','o','b']))

