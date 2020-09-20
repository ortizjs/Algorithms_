// First implementation is for sorted arrays using an adapted approach of binary search 
//in O(logn) time and O(n) space

function findDuplicateSpaceEdition(nums) {
    let floorIdx = 0;
    let ceilIdx = nums.length - 1;

    while (floorIdx < ceilIdx) {
        let distance = ceilIdx - floorIdx;
        let halfDistance = Math.floor(distance/2);
        let guessIdx = floorIdx + halfDistance;
        let guessVal = nums[guessIdx];
        let prevVal = nums[guessIdx - 1];
        let nextVal = nums[guessIdx + 1];
        if (guessVal === prevVal || guessVal === nextVal) {
            return guessVal;
        }

        if (guessVal <= guessIdx) {
            ceilIdx = guessIdx;
        } else {
            floorIdx = guessIdx;
        }
    }
    throw new Error("No duplicates found!")
}



//Implementatin for unsorted arrays in O(nlogn) time and (0)1 space using 
// adapted binary search but instead of cutting down array we are cutting down the 
// probabilities for different numbers

function findDuplicateSpaceEditionInterviewCake(nums) {
    let floor = 1;
    let ceil = nums.length - 1;

    while (floor < ceil) {
        let distance = ceil - floor;
        let halfDistance = Math.floor(distance/2);
        let midPoint = floor + halfDistance;
        let lowerRangeFloor = floor;
        let lowerRangeCeil = midPoint;
        let higherRangeFloor = midPoint + 1;
        let higherRangeCeil = ceil;

        let distinctItemsInLowerRange = (lowerRangeCeil - lowerRangeFloor) + 1;
        let itemsInLowerRange = 0;

        nums.forEach(num => {
            if (lowerRangeFloor <= num && num <= lowerRangeCeil) {
                itemsInLowerRange++;
            }
        });

        if (itemsInLowerRange > distinctItemsInLowerRange) {
            floor = lowerRangeFloor;
            ceil = midPoint;
        } else {
            floor = higherRangeFloor;
            ceil = higherRangeCeil;
        }
    }
    return floor;

}

console.log("------------sorted arrays ------------")
console.log(findDuplicateSpaceEdition([1,2,3,3,4,5,6,7,8,9]))
console.log(findDuplicateSpaceEdition([1,2,3,4,5,6,7,7,8,9]))
// console.log(findDuplicateSpaceEdition([2,3,1,5,6,7,9,8,9]))
// console.log(findDuplicateSpaceEdition([1,2,3,4,5,6,7,8,9]))
// console.log(findDuplicateSpaceEdition([1,2,3,4,5,6,7,8,9,10]))
console.log("-------------unsorted arrays -----------")
console.log(findDuplicateSpaceEditionInterviewCake([2,3,7,1,4,7,6,5]));
console.log(findDuplicateSpaceEditionInterviewCake([2,3,6,1,4,6,5]));