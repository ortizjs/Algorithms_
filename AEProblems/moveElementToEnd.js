// function moveElementToEnd(array, toMove) {
//     // Write your code here.
//     let startIdx = 0;
//     let endIdx = array.length - 1;

//     while (startIdx < endIdx) {
//         let current = array[startIdx];
//         if (current === toMove) {
//             let notSwapped = true;
//             while (notSwapped && startIdx < endIdx) {
//                 let endNum = array[endIdx];
//                 notSwapped = false;
//                 if (endNum === toMove) {
//                     notSwapped = true;
//                 } else {
//                     [array[startIdx], array[endIdx]] = [array[endIdx], array[startIdx]];
//                     break;
//                 }
//                 endIdx--;
//             }
//         }
//         startIdx++;
//     }
//     return array;
// }

function moveElementToEnd(array, toMove) {
    let startIdx = 0;
    let endIdx = array.length - 1;

    while (startIdx < endIdx) {
        while (startIdx < endIdx && array[endIdx] === toMove) {
            endIdx--;
        }
        if (array[startIdx] === toMove) {
            swap(array, startIdx, endIdx);
        }
        startIdx++;
    }
    return array;
}

function swap(array, start, end) {
    [array[start], array[end]] = [array[end], array[start]];
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))