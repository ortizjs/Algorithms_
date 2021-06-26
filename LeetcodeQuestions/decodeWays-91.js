/**
 * @param {string} s
 * @return {number}
 * 
 * Time: O(n) for the length of the input string as we are making a recursive call for every index. And although there are two recursive calls, time still linear as we are avoiding recomputing certain calculations from these two recursive calls when we check the memo.
 * 
 * Space: O(n) for the memo utilized
 */
// var numDecodings = function(s) {
//     return decodeMemoized(s, 0);
// };

// function decodeMemoized(s,idx,memo={}){
//     if (idx in memo) return memo[idx];
//     if (s.charAt(idx) === "0") return 0;
//     if (idx === s.length || idx === s.length - 1) return 1;
    
//     let answer = decodeMemoized(s,idx + 1, memo);
    
//     if (parseInt(s.substring(idx, idx + 2)) <= 26) {
//         answer += decodeMemoized(s, idx + 2, memo);
//     }
    
//     memo[idx] = answer;
//     return answer;
// }

/**
 * @param {string} s
 * @return {number}
 * Time: O(n) for the length of the input str
 * Space: O(1) as there is no additional data structure used only pointers.
 */
var numDecodings = function(s) {
    if (s.charAt(0) === "0") return 0;
    let n = s.length;

    let prevOne = 1;
    let prevTwo = 1;

    for (let i = 1; i < n; i++) {
        let current = 0;
        if (s.charAt(i) !== "0") {
            current += prevOne;
        }
        let twoDigits = s.substring(i - 1, i + 1);
        if (twoDigits >= 10 && twoDigits <= 26) {
            current += prevTwo;
        }
        prevTwo = prevOne;
        prevOne = current;
    }
    return prevOne;
};