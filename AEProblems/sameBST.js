function sameBsts(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0]) {
        return false;
    }
    if (arrayOne.length === 0 && arrayTwo.length === 0) {
        return true;
    }

    let leftOne = getSmallerValues(arrayOne);
    let leftTwo = getSmallerValues(arrayTwo);

    let rightOne = getBiggerOrEqualValues(arrayOne);
    let rightTwo = getBiggerOrEqualValues(arrayTwo);

    return sameBsts(leftOne, leftTwo) && sameBsts(rightOne, rightTwo);
}

function getSmallerValues(array) {
    return array.slice(1).filter(num => num < array[0]);
}

function getBiggerOrEqualValues(array) {
    return array.slice(1).filter(num => num >= array[0]);
}

console.log(sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]))

