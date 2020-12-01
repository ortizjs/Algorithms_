function threeNumberSum(numbers, target) {
    let results = [];
    let sortedNums = numbers.sort((a,b) => {
        return a - b;
    });

    for (let i = 0 ; i < sortedNums.length - 2; i++) {
        let current = sortedNums[i];
        let l = i + 1;
        let r = sortedNums.length - 1;
        while (l < r) {
            let left  = sortedNums[l];
            let right = sortedNums[r];
            let currentSum = current + left + right;
            if (currentSum === target) {
                results.push([current, left, right]);
                l++;
                r--;
            } else if (currentSum < target) {
                l++;
            } else {
                r--;
            }
        }
    }
    return results;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)); //[[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
console.log(threeNumberSum([1, 2, 3], 6)); // [[1,2,3]]
console.log(threeNumberSum([1, 2, 3], 7)); // []
console.log(threeNumberSum([8, 10, -2, 49, 14], 57)); // [[-2, 10, 49]]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1], 0)); //  [[-8, 3, 5], [-6, 1, 5], [-1, 0, 1]]
console.log(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)); // [[-8, 2, 6], [-8, 3, 5], [-6, 0, 6], [-6, 1, 5], [-1, 0, 1]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 18)); // [[1, 2, 15],[1, 8, 9],[2, 7, 9],[3, 6, 9],[3, 7, 8],[4, 5, 9],[4, 6, 8],[5, 6, 7]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)); // [[8, 9, 15]]
console.log(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 33)); // []