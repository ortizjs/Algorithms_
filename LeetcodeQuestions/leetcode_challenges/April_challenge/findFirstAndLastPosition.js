/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let res = Array(2);
    res[0] = getStartingIdx(nums, target);
    res[1] = getEndingIdx(nums, target);
    return res;
};

function getStartingIdx(nums, target) {
    let idx = -1;
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let midpoint = start + Math.floor((end - start) / 2);
        console.log(midpoint)
        if (nums[midpoint] >= target) {
            end = midpoint - 1;
        } else {
            start = midpoint + 1;
        }
        if (nums[midpoint] === target) idx = midpoint;
    }
    return idx;
}

function getEndingIdx(nums, target) {
    let idx = - 1;
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        let midpoint = start + Math.floor((end - start) / 2);
        if (nums[midpoint] <= target) {
            start = midpoint + 1;
        } else {
            end = midpoint - 1
        }
        if (nums[midpoint] === target) idx = midpoint; 
    }
    
    return idx;
}