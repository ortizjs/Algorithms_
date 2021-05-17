/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    if (nums === null || !nums.length) return [];
    let permutations = [];
    let charMap = {};
    
    for (let n of nums) {
        if (charMap[n]) {
            charMap[n]++; 
        } else {
            charMap[n] = 1;
        }
    }
    
    generatePermutations(nums, permutations, charMap, []);
    return permutations;
};

function generatePermutations(nums, permutations, charMap, current) {
    if (current.length === nums.length) {
        permutations.push(Array.from(current));
        return;
    }
    
    for (let n in charMap) {
        if (charMap[n] > 0) {
            charMap[n]--;
            generatePermutations(nums, permutations, charMap, [...current, n])
            charMap[n]++;
        }
    }
};

console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([1,2,3]));

