/**
 * @param {number} num
 * @return {string}
 * 
 * Time: O(n) wher n is the number of digits in the input;
 * Space: O(1) since the output is just a string and space for used data structures is always the same;
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";
    let levelOne = ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten",
         "Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen"];
    let levelTwo = ["Twenty","Thirty","Forty","Fifty","Sixty","Seventy","Eighty","Ninety"];
    let levelThree = "Hundred";
    let levelFour = ["Thousan", "Million", "Billion"];

    let res = [];
    let current = num;
    let commas = 0;

    while (current > 0) {
        let n = current % 1000;
        current = Math.floor(current/1000);

        let words = [];

        if (n > 99) {
            words.push(levelOne[Math.floor(n/100)]);
            words.push(levelThree);
            n %= 100;
        }

        if (n > 19) {
            words.push(levelTwo[Math.floor(n/10) - 2]);
            n %= 10;
        }

        if (n > 0) {
            words.push(levelOne[n]);
        }

        if (words.length > 0) {
            if (commas > 0) {
                words.push(levelFour[commas - 1]);
            }

            res.push(words.join(" "));
        }
        commas++;
    }

    return res.reverse().join(" ");
};