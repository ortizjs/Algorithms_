function bestsum(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let results = null;

    for (let num of numbers) {
        let remainder = targetSum - num;
        let remainderCombination = bestsum(remainder, numbers, memo)
        if (remainderCombination !== null) {
            let combination = [...remainderCombination, num];
            if (results === null || combination.length < results.length) {
                results = combination
            }
        }
    }
    memo[targetSum] = results
    return results
}

console.log(bestsum(7, [2, 3, 5]))
console.log(bestsum(8, [2, 3, 5]))
console.log(bestsum(8, [1, 4, 5]))
console.log(bestsum(100, [1, 2, 5, 25]))