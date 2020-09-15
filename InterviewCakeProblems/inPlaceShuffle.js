function getRandom(floor, ceiling) {
    return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function inPlaceShuffle(arr){
    if (arr.length <= 1) return;
    
    for (let i = 0; i < arr.length; i++) {
        let randomIdx = getRandom(i, arr.length - 1);
        if (i != randomIdx) {
            temp = arr[i];
            arr[i] = arr[randomIdx];
            arr[randomIdx] = temp;
        }
    }
    return arr;
}

console.log(inPlaceShuffle([1,2,3,4,5,6,7]))
console.log(inPlaceShuffle([11,22,33,44,55,66,77]))
console.log(inPlaceShuffle([91,33,55,64,77,21]))