function subarraySum(nums, k) {
    let sums = {0:1};
    let sum = 0;
    let count = 0;

    for (let num of nums) {
        sum += num;
        let diff = sum - k;
        if (diff in sums) {
            count += sums[diff];
        }
        if (sums[sum] === undefined) {
            sums[sum] = 1;
        } else {
            sums[sum]++;
        }
    }
    return count;
}