var distributeCandies = function (candyType) {
    let half = candyType.length / 2
    let typesOfCandy = [...new Set(candyType)]
    if (typesOfCandy.length >= half) {
        return half
    }
    return typesOfCandy.length
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([1, 1, 2, 3]))
console.log(distributeCandies([6, 6, 6, 6]))