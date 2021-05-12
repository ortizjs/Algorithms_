/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if (envelopes.length === 1) return 1;
    envelopes = envelopes.sort((a,b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]);
    let dp = new Array(envelopes.length);
    let maxLen = 0;
    
    for (let i = 0; i < envelopes.length; i++) {
        let idx = binarySearch(dp, 0, maxLen, envelopes[i][1]);
        dp[idx] = envelopes[i][1];
        if (maxLen === idx) maxLen++;
    }
    return maxLen;
};

function binarySearch(dp, start, end, target) {
    while (start < end) {
        let mid = start + Math.floor((end - start)/2);
        if (dp[mid] === target) {
            return mid;
        } else if (dp[mid] > target) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

console.log(maxEnvelopes([[5,4],[6,4],[6,7],[2,3]]))
console.log(maxEnvelopes([[1,1],[1,1],[1,1]]))