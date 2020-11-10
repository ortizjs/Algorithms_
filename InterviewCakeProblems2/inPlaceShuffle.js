function getRandom(floor, ceil) {
    return Math.floor(Math.random() * (ceil - floor) + floor)
}

function inPlaceShuffle(arr) {
    for (let i = 0 ; i < arr.length; i++) {
        let randomIdx = getRandom(i, arr.length - 1)
        if (i != randomIdx) {
            [arr[i], arr[randomIdx]] = [arr[randomIdx], arr[i]]
        }
    }
    return arr;
}

arr1 = [1, 2, 3, 4, 5, 6, 7];
arr2 = [11, 22, 33, 44, 55, 66, 77];
arr3 = [91, 33, 55, 64, 77, 21];

console.log(inPlaceShuffle(arr1))
console.log(inPlaceShuffle(arr2))
console.log(inPlaceShuffle(arr3))