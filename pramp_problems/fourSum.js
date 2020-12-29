function fourSum(array, target) {


    let sortedArray = array.sort((a, b) => { return a - b })
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = i + 1; j < sortedArray.length; j++) {
            let currentSum = sortedArray[i] + sortedArray[j];
            let curDiff = target - currentSum
            let res = twoSum(sortedArray, j + 1, curDiff)
            if (res.length > 1) {
                return [array[i], array[j]].concat(res)
            }
        }
    }
    return []
}

function twoSum(array, idx, target) {
    let pairs = new Set();

    for (let i = idx; i < array.length; i++) {
        let diff = target - array[i]
        if (pairs.has(diff)) {
            return [diff, array[i]]
        } else {
            pairs.add(array[i])
        }
    }
    return [];
}

let arr = [2, 7, 4, 0, 9, 5, 1, 3]
s = 20

/*
hash = {"11":[[7,4]],
        "7":[[7,0]],
        "16":[[7,9]],
        "12":[[7,5]],
        "8": [[7,1]],
        "10":[[7,3]]}
*/

console.log(fourSum(arr, s))
