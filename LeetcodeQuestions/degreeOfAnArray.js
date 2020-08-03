function degreeOfAnArray(nums) {
    let min = Infinity;
    let hash = {};
    let degree = 0;
    for (let i = 0; i < nums.length; i++) {
        let ele = nums[i];
        if (ele in hash) {
            hash[ele]['count']++;
            hash[ele]['endIdx'] = i;
            degree = hash[ele]['count'] > degree ? hash[ele]['count'] : degree
        } else {
            hash[ele] = { 'count': 1, 'startIdx': i, 'endIdx': i }
            degree = hash[ele]['count'] > degree ? hash[ele]['count'] : degree
        }
    }
    for (k in hash) {
        if (hash[k]['count'] == degree) {
            let range = (hash[k]['endIdx'] - hash[k]['startIdx'] + 1)
            if (range < min) {
                min = range;
            }
        }
    }
    return min;
}

console.log(degreeOfAnArray([1,2,2,3,1]))
console.log(degreeOfAnArray([1,2,2,3,1]) == 2)
console.log(degreeOfAnArray([1,2,2,3,1,4,2]))
console.log(degreeOfAnArray([1,2,2,3,1,4,2]) == 6)
console.log(degreeOfAnArray([1,2]))
console.log(degreeOfAnArray([1,2]) == 1)
console.log(degreeOfAnArray([1]))
console.log(degreeOfAnArray([1]) == 1)
