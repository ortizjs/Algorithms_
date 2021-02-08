var shortestToChar = function (s, c) {
    let charsIdx = new Array(s.length).fill(Infinity);

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char === c) {
            charsIdx[i] = 0;
            let j = i - 1;

            while (j >= 0) {
                let dis = i - j;
                charsIdx[j] = Math.min(charsIdx[j], dis);
                j--;
            }
            let k = i + 1;
            while (k < charsIdx.length) {
                let dis = k - i;
                charsIdx[k] = Math.min(charsIdx[k], dis);
                k++;
            }
        }
    }
    return charsIdx;
};

console.log(shortestToChar("loveleetcode", "e"))
console.log(shortestToChar("aaab", "b"))