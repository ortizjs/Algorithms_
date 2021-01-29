function getSmallestString(n, k) {
    let alpha = " abcdefghijklmnopqrstuvwxyz";
    let str = "";

    for (let i = n - 1; i >= 0; i--) {
        let min = Math.min(26, k - i);
        str = alpha[min] + str;
        k = k - min;
    }
    return str;
}

console.log(getSmallestString(3, 27))
console.log(getSmallestString(5, 73))