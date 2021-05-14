/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let sortedCandidates = candidates.sort((a,b) => a - b);
    
    getCombos(res, [], sortedCandidates, target, 0);
    return res;
};

function getCombos(res, combos, nums, target, startIdx) {
    if (target === 0) {
        res.push(Array.from(combos));
        return;
    }
    
    for (let i = startIdx; i < nums.length; i++) {
        if (target < nums[i]) {
            break;
        }
        getCombos(res, [...combos, nums[i]], nums, target - nums[i], i);
    }
}

console.log(combinationSum([2,3,6,7], 7))
console.log(combinationSum([2,3,5], 8))
console.log(combinationSum([2], 1))
console.log(combinationSum([1], 1))
console.log(combinationSum([1], 2))