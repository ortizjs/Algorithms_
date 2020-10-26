function mergeSortedArrays(AArray, BArray) {
    let resultArray = [];
    let combinedArrayLength = AArray.length + BArray.length
    let i = 0;
    let j = 0;
    let combinedArrayIdx = 0
    while (resultArray.length < combinedArrayLength) {
        let isAArrayExhausted = i >= AArray.length;
        let isBArrayExhausted = j >= BArray.length;
        if ((AArray[i] <= BArray[j] || isBArrayExhausted) && !isAArrayExhausted) {
            resultArray[combinedArrayIdx] = AArray[i];
            i++;
        } else {
            resultArray[combinedArrayIdx] = BArray[j];
            j++;
        }
        combinedArrayIdx++;
    }
    return resultArray
}

function mergeSortedArrays2(AArray, BArray) {
    let combinedArray = [];
    let combinedArrayLength = AArray.length + BArray.length;
    let isAArrayExhausted = AArray.length <= 0
    let isBArrayExhausted = BArray.length <= 0
    let combinedArrayIdx = 0;
    while (combinedArrayIdx < combinedArrayLength) {
        let newElement;
        if ((AArray[0] <= BArray[0] && !isAArrayExhausted) || isBArrayExhausted) {
            newElement = AArray.shift();
        } else {
            newElement = BArray.shift();
        }
        combinedArray[combinedArrayIdx] = newElement;
        combinedArrayIdx++;
    }
    return combinedArray;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
// result = [1,]
// isMyArrayExhasuted = i === AArray.length // false
// isAliceArrayExhausted = j === ABArray.length // false
// i = 0
// j = 1


console.log(mergeSortedArrays(myArray, alicesArray));
console.log(mergeSortedArrays2(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
