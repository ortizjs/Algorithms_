function runningSum(nums) {
    let sums = new Array(nums.length);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sums[i] = sum += nums[i]
    }

    return sums
}

console.log(runningSum([1,1,1,1,1]));
console.log(runningSum([1,2,3,4]));
console.log(runningSum([3,1,2,10,1]));