/**
 * @param {number[]} nums
 * @return {number[][]}
 * 
 * Time: O(nlogn) for sorting
 * Space: O(n) for the newly created sorted arr;
 */

var threeSum = function(nums) {
    let res = [];
    let sorted = nums.sort((a,b) => a - b);
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (i === 0 || (i > 0 && sorted[i] !== sorted[i - 1])) {
            let low = i + 1;
            let high = sorted.length - 1;
            
            while (low < high) {
                let current = sorted[i];
                let left = sorted[low];
                let right = sorted[high];
                let sum = current + left + right;
                
                if (sum === 0) {
                    res.push([current, left, right])
                    while (low < high && sorted[low] === sorted[low + 1]) low++;
                    while (low < high && sorted[high] === sorted[high - 1]) high--;
                    low++;
                    high--;
                } else if (sum > 0) {
                    high--;
                } else {
                    low++;
                }
            }
        }
    }
    return res;
};


console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([]));
console.log(threeSum([0]));

