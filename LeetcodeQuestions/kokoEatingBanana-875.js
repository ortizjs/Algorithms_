/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let left = 1, right = Math.max(...piles);
    
    while (left <= right) {
        let mid = left + Math.floor((right - left)/2);
        if (canEat(mid, piles, h)) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};

function canEat(k, piles, h) {
    let time = 0;
    for (let p of piles) {
        time += Math.ceil(p/k);
    }
    return time <= h;
}

console.log(minEatingSpeed([3,6,7,11], 8))
console.log(minEatingSpeed([30,11,23,4,20], 5))
console.log(minEatingSpeed([30,11,23,4,20], 6))