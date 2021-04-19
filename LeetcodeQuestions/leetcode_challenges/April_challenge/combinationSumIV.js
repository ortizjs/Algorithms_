function combinationSum4(nums,target,memo={}) {
    if (target in memo) return memo[target];
    if (target === 0) return 1;
    if (target < 0) return null;

    let count = 0;

    for (let num of nums) {
        let diff = target - num;
        let combos = combinationSum4(nums, diff, memo);
        if (combos !== null) count += combos;
    }
    memo[target] = count;
    return count;
};

console.log(combinationSum4([1,2,3], 4))
console.log(combinationSum4([9], 3))
console.log(combinationSum4([1,2,3], 32))