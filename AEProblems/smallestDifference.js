function smallestDiff(arrayOne, arrayTwo) {
    arrayOne = arrayOne.sort((a, b) => { return a - b });
    arrayTwo = arrayTwo.sort((a, b) => { return a - b });

    let smallestDiff = Infinity;
    let nums = [];

    let idxOne = 0;
    let idxTwo = 0;

    while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
        let num = arrayOne[idxOne];
        let numTwo = arrayTwo[idxTwo];
        let diff = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo])
        if (diff < smallestDiff) {
            smallestDiff = diff;
            nums = [arrayOne[idxOne], arrayTwo[idxTwo]]
        }

        if (num < numTwo) {
            idxOne++
        } else if (num > numTwo) {
            idxTwo++
        } else {
            return [num, numTwo];
        }
    }
    return nums;
}