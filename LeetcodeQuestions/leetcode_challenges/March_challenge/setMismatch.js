var findErrorNums = function (nums) {
    let arr = new Array(nums.length).fill(0)
    let res = new Array(2)

    for (let num of nums) {
        arr[num - 1] += 1
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 2) res[0] = i + 1
        if (arr[i] === 0) res[1] = i + 1
    }

    return res
};