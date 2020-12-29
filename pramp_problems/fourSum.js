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

function fourSumTwo(array, s) {
    let pairs_hash = {}
    let results = []
    let sorted_nums = arr.sort((a, b) => {
        return a - b;
    });

    for (let i = 1; i < sorted_nums.length - 1; i++) {
        for (let j = i + 1; j < sorted_nums.length; j++) {
            let first_sum = sorted_nums[i] + sorted_nums[j];
            let diff = s - first_sum
            if (diff in pairs_hash) {
                for (let pair of pairs_hash[diff]) {
                    results.push(pair.concat([sorted_nums[i], sorted_nums[j]]))
                }
            }
        }

        for (let k = 0; k < i; k++) {
            let second_sum = sorted_nums[i] + sorted_nums[k]
            if (second_sum in pairs_hash) {
                pairs_hash[second_sum].push([sorted_nums[k], sorted_nums[i]])
            } else {
                pairs_hash[second_sum] = [[sorted_nums[k], sorted_nums[i]]]
            }
        }
    }
    return results
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
console.log(fourSumTwo(arr, s))
