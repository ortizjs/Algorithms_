var maxOperations = function (nums, k) {
    let counter = 0;
    let map = {};

    for (let num of nums) {
        let diff = k - num;
        if (diff in map) {
            if (map[diff] === 1) {
                delete map[diff];
            } else {
                map[diff]--;
            }
            counter++;
        } else {
            if (!(num in map)) {
                map[num] = 1;
            } else {
                map[num]++;
            }
        }
    }
    return counter;
    // let sortedNums = nums.sort((a, b) => { return a - b });
    // let start = 0;
    // let end = nums.length - 1;
    // let counter = 0;

    // while (start < end) {
    //     let sum = nums[start] + nums[end];
    //     if (sum < k) {
    //         start++;
    //     } else if (sum > k) {
    //         end--;
    //     } else {
    //         end--;
    //         start++;
    //         counter++;
    //     }
    // }
    // return counter;
    //     if (k in memo) return memo[k];
    //     if (k === 0) return 1;
    //     // if (k < 0) return -1;
    //     let counter = 0;

    //     for (let i = 0; i < nums.length; i++) {
    //         let diff = k - nums[i];
    //         // let remainderNums = [...nums.slice(0,i), ...nums.slice(i + 1, nums.length)]
    //         let remainderNums = nums.slice(i + 1, nums.length)
    //         // console.log(remainderNums)
    //         let remainders = maxOperations(remainderNums, diff, memo)
    //         if (remainders !== -1) {
    //             counter += remainders
    //             memo[k] = counter
    //         }
    //     }
    //     memo[k] = counter;
    //     return counter
}