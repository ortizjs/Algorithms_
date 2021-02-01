/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let binStr = n.toString(2).split("1").length - 1
    return binStr
    // let counter = 0;
    // for (let char of binStr) {
    //     if (char === "1") counter++
    // }
    // return counter;
};