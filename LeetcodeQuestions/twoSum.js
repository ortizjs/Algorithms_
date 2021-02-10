var twoSum = function (nums, target) {
    let seen = {}

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in seen) {
            return [seen[diff], i]
        } else {
            seen[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))