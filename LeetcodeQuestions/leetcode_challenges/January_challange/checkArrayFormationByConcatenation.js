function canFormArray(arr, pieces) {
    let map = {}
    for (let p of pieces) {
        map[p[0]] = p
        console.log(p)
    }
    console.log(map)
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (map.hasOwnProperty(arr[i])) {
            let subArr = map[arr[i]]
            for (let n of subArr) {
                if (n === arr[i]) {
                    i++;
                } else {
                    return false
                }
            }
        } else {
            return false;
        }
        i--
    }
    return true
};

console.log(canFormArray([91, 4, 64, 78], [[78], [4, 64], [91]]));
// console.log(canFormArray([49, 18, 16], [[16, 18, 49]]));