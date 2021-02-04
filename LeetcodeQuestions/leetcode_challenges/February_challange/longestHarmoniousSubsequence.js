function findLHS(nums) {
    nums.sort((a, b) => { return a - b });
    let same_num_count = 1;
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        if (i > 0 && nums[i] - nums[i - 1] === 1) {
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                count++;
                i++;
            }
            longest = Math.max(longest, same_num_count + count);
            same_num_count = count;
        } else {
            while (i < nums.length - 1 && nums[i] === nums[i + 1]) {
                count++;
                i++;
            }
            same_num_count = count;
        }
    }
    return longest;
}