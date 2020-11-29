//InterviewCake solution taking a graph/linkedList approach:

function findDuplicateSpaceEditionBestMode(intArray) {
    // [4, 1, 4, 8, 3, 2, 7, 6, 5]

    let n = intArray.length - 1; // 8
    let positionInCycle = n + 1; //  9

    for (let i = 0; i < n; i++) { // i = 0 // i = 1 // i = 2 // i = 3 // i = 4 // i = 5 // i = 6 // i = 7
        positionInCycle = intArray[positionInCycle - 1]; // intArray[9 - 1] = 5 // intArray[5 - 1] = 3 // intArray[3 - 1] = 4 
        // intArray[4 - 1] = 8 // intArray[8 - 1] = 6 // intArray[6 - 1] = 2 // intArray[2 - 1] = 1 // intArray[1 - 1] = 4
    }


    let rememberedPositionInCycle = positionInCycle; // 4
    // console.log(positionInCycle)
    let currentPositionInCycle = intArray[positionInCycle - 1]; // intArray[4 - 1] = intArray[3] = 8

    let cycleStepCount = 1;
    // console.log(currentPositionInCycle, rememberedPositionInCycle)

    while (currentPositionInCycle !== rememberedPositionInCycle) { // 8 != 4 // 6 !== 4 // 2 !== 4 // 1 !== 4 // 4 === 4
        currentPositionInCycle = intArray[currentPositionInCycle - 1] // intArray[8 - 1] = 6 // intArray[6 - 1] = 2 
        // intArray[2 - 1] = 1 // intArray[1 - 1] = 4
        cycleStepCount++; // 2 // 3 // 4 // 5
    }
    // console.log(cycleStepCount)

    // cycleStepcount = 5

    let pointerStart = n + 1; // 9
    let pointerAhead = n + 1; // 9

    for (let i = 0; i < cycleStepCount; i++) { // i = 0 / i = 1 / i = 2 / i = 3 / i = 4
        pointerAhead = intArray[pointerAhead - 1]; // intArray[pointerAhead - 1] -> intArray[9 - 1] = 5 // intArray[5 - 1] = 3
        // intArray[3 - 1] = 4 // intArray[4 - 1] = 8 // intArray[ 8 - 1] = 6
    }

    while (pointerStart !== pointerAhead) { // 9 !== 6 // 5 !== 2 // 3 == 1 // 
        pointerStart = intArray[pointerStart - 1]; // intArray[9 - 1] = 5 // intArray[5 - 1] = 3 // intArray[3 - 1] = 4
        pointerAhead = intArray[pointerAhead - 1]; // intArray[6 - 1] = 2 // intArray[2 - 1] = 1 // intArray[1 - 1] = 4
    }

    return pointerStart;
}

//My solution derived from some tips from online videos:

// function findDuplicateSpaceEditionBestMode(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let currentNode = nums[i];
//         let value = Math.abs(currentNode);
//         let nextPointerIdx = value - 1;
//         let nextPointerValue = nums[nextPointerIdx];

//         if (nextPointerValue < 0) {
//             return value;
//         } else {
//             nums[nextPointerIdx] = nums[nextPointerValue] * -1
//         }
//     }
//     return 0
// }


console.log(findDuplicateSpaceEditionBestMode([1, 1]))
console.log(findDuplicateSpaceEditionBestMode([1, 2, 3, 2]))
console.log(findDuplicateSpaceEditionBestMode([1, 2, 5, 5, 5, 5]))
console.log(findDuplicateSpaceEditionBestMode([4, 1, 4, 8, 3, 2, 7, 6, 5]))