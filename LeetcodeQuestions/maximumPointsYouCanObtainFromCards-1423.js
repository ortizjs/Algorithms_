function maxScore(cardPoints, k) {
    let n = cardPoints.length;
    let sum = cardPoints.reduce((acc, ele) => acc + ele);
    let total = 0;
    if (n === k) return sum;
    let window = 0;

    for (let i = 0; i < n - k - 1; i++) {
        window += cardPoints[i];
    }

    for (let i = n - k - 1; i < n; i++) {
        window += cardPoints[i];
        total = Math.max(total, sum - window);
        window -= cardPoints[i - (n - k - 1)];
    }
    return total;
}

console.log(maxScore([1,2,3,4,5,6,1], 3))
console.log(maxScore([10,2,3,4,5,6,1], 3))