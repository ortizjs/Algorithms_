function twoSum(numbers, targetSum) {
    let results = [];
    let seen = new Set();

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        let nextNum = targetSum - currentNum;
        if (seen.has(nextNum)) {
            results.push(currentNum, nextNum);
            return results;
        } else {
            seen.add(currentNum);
        }
    }
    return results;
}

console.log(twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10))
console.log(twoSum([4, 6], 10))
console.log(twoSum([4, 6, 1], 5))