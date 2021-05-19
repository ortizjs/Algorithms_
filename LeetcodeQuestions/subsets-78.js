/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums.length || nums === null) return [[]];
    let sets = [];
    
    generateSubsets(nums, 0, [], sets);
    return sets;
};

function generateSubsets(nums, idx, current, sets) {
    sets.push(Array.from(current));
    
    for (let i = idx; i < nums.length; i++) {
        generateSubsets(nums, i + 1, [...current, nums[i]], sets);
    }
}