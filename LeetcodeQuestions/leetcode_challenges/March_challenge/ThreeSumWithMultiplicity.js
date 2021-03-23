var threeSumMulti = function (arr, target) {
    let total = 0;
    let occur = new Array(101).fill(0)

    for (let num of arr) {
        occur[num]++;
    }
    for (let i = 0; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            let k = target - i - j;
            if (k < 0 || k > 100) continue;
            if (i == j && j == k) {
                total += (occur[i] * (occur[i] - 1) * (occur[i] - 2) / 6)
            } else if (i == j && j != k) {
                total += ((occur[i] * (occur[i] - 1) / 2) * occur[k]);
            } else if (i < j && j < k) {
                total += (occur[i] * occur[j] * occur[k]);
            }
        }
    }
    return (total % (10 ** 9 + 7))
};


console.log(threeSumMulti([1, 1, 2, 2, 3, 3, 4, 4, 5, 5], 8))
console.log(threeSumMulti([1, 1, 2, 2, 2, 2], 5))