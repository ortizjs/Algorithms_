function binarySearch(arr, target) {
    let floorIdx = -1;
    let ceilIdx = arr.length;

    while (floorIdx + 1 < ceilIdx) {
        let distance = ceilIdx - floorIdx;
        let halfDistance = Math.floor(distance/2);
        let guessIdx = floorIdx + halfDistance;
        let guessVal = arr[guessIdx];

        if (guessVal === target) {
            return true;
        }

        if (guessVal > target) {
            ceilIdx = guessIdx;
        } else {
            floorIdx = guessIdx;
        }
    }
    return false;
};


function binarySearchRecur(nums, target) {
    if (nums.length < 1) {
        return false;
    }
    let midIdx = Math.min(nums.length / 2);
    if (target < nums[midIdx]) {
        return binarySearchRecur(nums.slice(0, midIdx), target);
    } else if (target > nums[midIdx]) {
        return binarySearchRecur(nums.slice(midIdx + 1), target);
    } else {
        return true;
    }
}


console.log("------ Iterative version of Binary Search")
console.log(binarySearch([1,2,3,4,5,6,7], 7));
console.log(binarySearch([0, 10, 21, 33, 44, 55, 88, 91, 100], 21));
console.log(binarySearch([11, 22, 33, 44, 55, 67, 77], 66));
console.log("------ Recursive version of Binary Search")
console.log(binarySearch([1,2,3,4,5,6,7], 7));
console.log(binarySearch([0, 10, 21, 33, 44, 55, 88, 91, 100], 21));
console.log(binarySearch([11, 22, 33, 44, 55, 67, 77], 66));