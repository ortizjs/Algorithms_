function findDuplicate(nums) {

    let floorIdx = 1;
    let ceilIdx = nums.length - 1;
    
    while (floorIdx < ceilIdx) {
        let distance = ceilIdx - floorIdx;
        let halfDistance = Math.floor(distance/2);
        let midIdx = floorIdx + halfDistance;
        let lowerRangeFloor = floorIdx;
        let lowerRangeCeil = midIdx;
        let upperRangeFloor = midIdx + 1;
        let upperRangeCeil = ceilIdx;
        let lowerRangeCount = 0;

        let possibleIntergersInLowerRange = lowerRangeCeil - lowerRangeFloor + 1;

        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (num >= lowerRangeFloor && num <= lowerRangeCeil) {
                lowerRangeCount++;
            }
        }
        if (lowerRangeCount > possibleIntergersInLowerRange) {
            floorIdx = lowerRangeFloor;
            ceilIdx = lowerRangeCeil;
        } else {
            floorIdx = upperRangeFloor;
            ceilIdx = upperRangeCeil;
        }
    }
    return floorIdx
}

nums = [2, 3, 5, 7, 8, 1, 4, 10, 6, 7, 9];
nums2 = [1,2,3,4,5,6,7,7];
nums3 = [1,2,2,2,3,4,5,6,7];

console.log(findDuplicate(nums))
console.log(findDuplicate(nums2))
console.log(findDuplicate(nums3))


// nums = [2,3,5,7,8,1,4,10,6,7,9];
// length = 11
// floorIdx = 0, 6, 6
// ceilIdx = 10, 10, 8
// distance = ceilIdx - floorIdx = 10 - 0 = 5, 10 - 6 = 4, 8 - 6 = 2, 
// halfdistance = Math.min(distance/2) = 5, 2, 1
// midIdx = floorIdx + halfDistance = 0 + 5 = 5, 6 + 2 = 8, 6 + 1 = 7

// lowerRangeFloor = floorIdx // 0, 6, 6, 6, 
// lowerRangeCeil = midIdx // 5, 8, 7
// upperRangeFloor = midIdx + 1 // 6, 9, 8
// upperRangeCeil  = ceilIdx // 10, 10, 8

// lowerRangeCount(floorIdx..midIdx)(1..5), (6..8), (6..7) = 2/3/5/1/4, 7/8/6/7, 7/6/7 = 5, 4, 3
// upperRangeCount(midIdx + 1..ceilIDx)(6..10), (9..10), (8..8) = 7/8/10/6/7/9, 10/9, 8 = 6, 2, 1

// if lowerRangeCount > halfDistance:
//   floorIdx = floorIdx;
//   ceilIdx = lowerRangeCeil
////    lowerRangeFloor = floorIdx // 0
////    lowerRangeCeil = lowerRangeCeil // 5
// else if upperRangeCount > halfDistance:
//   floorIdx = upperRangeFloor // 6
//   ceilIdx  = ceilIdx // 10
////    upperRangeFloor = upperRangeFloor // 
////    upperRangeCeil = ceilIdx
// reset counters to 0
