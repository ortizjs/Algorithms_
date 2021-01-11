//Brute force time: O(n^m) and space: O(m^2)
//Memoized solution: O(n*m^2) space: O(m^2)

function howSum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        let diff = targetSum - num;
        let diffResult = howSum(diff, numbers, memo)
        if (diffResult !== null) {
            memo[targetSum] = [...diffResult, num]
            return memo[targetSum]
        }
    }
    memo[targetSum] = null;
    return null;
}

console.log(howSum(7, [2, 3]))
console.log(howSum(7, [5, 3, 4, 7]))
console.log(howSum(7, [2, 4]))
console.log(howSum(8, [2, 3, 5]))
console.log(howSum(300, [7, 14]))