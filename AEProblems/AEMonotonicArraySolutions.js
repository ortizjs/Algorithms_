// function isMonotonic(array) {
//     let direction = array[1] - array[0];
// Solution 1:
//     for (let i = 2; i < array.length; i++) {
//         if (direction === 0) {
//             direction = array[i] - array[i - 1];
//         }
//         if (breaksDirection(direction, array[i - 1], array[i])) {
//             return false;
//         }
//     }
//     return true;
// }

// function breaksDirection(direction, prevNum, curretNum) {
//     let difference = curretNum - prevNum;

//     if (direction > 0) {
//         return difference < 0
//     }
//     return difference > 0;
// }

//Solution 2

function isMonotonic(array) {
    let isNoneIncreasing = true;
    let isNonDecreasing = true;

    for (let i = 2; i < array.length; i++) {
        if (array[i] < array[ i - 1]) {
            isNonDecreasing = false;
        }
        if (array[i] > array[i - 1]) {
            isNoneIncreasing = false;
        }
    }
    return isNonDecreasing || isNoneIncreasing
}

console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001]))