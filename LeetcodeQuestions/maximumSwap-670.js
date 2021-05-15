/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    let nums = String(num).split("");
    let map = {};
    
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    };
    
    for (let i = 0; i < nums.length; i++) {
        for (let d = 9; d > nums[i]; d--) {
            if (map[d] > i) {
                let temp = nums[i];
                nums[i] = nums[map[d]];
                nums[map[d]] = temp;
                return nums.join("");
            }
        }
    }
    return num;
};

console.log(maximumSwap(2736))
console.log(maximumSwap(9973))
console.log(maximumSwap(99848))