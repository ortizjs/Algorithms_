/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length || nums === null) return [];
    let permutations = [];
    let used = new Array(nums.length).fill(false);
    
    generatePermutations(nums, permutations, used, []);
    return permutations;
};

function generatePermutations(nums, permutations, used, current) {
    if (current.length === nums.length) {
        permutations.push(Array.from(current));
        return;
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        generatePermutations(nums, permutations, used, [...current, nums[i]]);
        used[i] = false;
    }
};


console.log(permute([1,2,3]))
console.log(permute([0,1]))
console.log(permute([1]))