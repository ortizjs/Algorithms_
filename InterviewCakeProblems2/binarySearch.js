function binarySearch(target, arr) {
    let floorIdx = -1;
    let ceilIdx = arr.length;
    while (floorIdx + 1 < ceilIdx) {
        let distance = ceilIdx - floorIdx
        let halfDistance = Math.floor(distance/2);
        let guessIdx = floorIdx + halfDistance;
        let guessVal = arr[guessIdx];

        if (target === guessVal) {
            return true;
        }
        if (target < guessVal) {
            ceilIdx = guessIdx;
        } else {
            floorIdx = guessIdx
        }
    }
    return false;
}

let arr1 = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [2,4,7,11,21,34,56,100];
let arr3 = [3,4,5,7,8,9,10]

console.log(binarySearch(7,arr1))
console.log(binarySearch(21,arr2))
console.log(binarySearch(21,arr3))
