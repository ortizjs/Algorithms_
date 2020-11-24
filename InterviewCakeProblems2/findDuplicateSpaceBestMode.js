//InterviewCake solution taking a graph/linkedList approach:

function findDuplicateSpaceEditionBestMode(intArray) {
    let n = intArray.length - 1;
    let positionInCycle = n + 1;

    for (let i = 0; i < n; i++) {
        positionInCycle = intArray[positionInCycle - 1];
    }

    let rememberedPositionInCycle = positionInCycle;
    // console.log(rememberedPositionInCycle)
    let currentPositionInCycle = intArray[positionInCycle - 1];
    let cycleStepCount = 1;
    while (currentPositionInCycle !== rememberedPositionInCycle) {
        currentPositionInCycle = intArray[currentPositionInCycle - 1]
        cycleStepCount++;
    }

    let pointerStart = n + 1;
    let pointerAhead = n + 1;

    for (let i = 0; i < cycleStepCount; i++) {
        pointerAhead = intArray[pointerAhead - 1];
    }

    while (pointerStart !== pointerAhead) {
        pointerStart = intArray[pointerStart - 1];
        pointerAhead = intArray[pointerAhead - 1];
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