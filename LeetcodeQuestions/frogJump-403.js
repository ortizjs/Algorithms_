function canCross(stones){
    for (let i = 3; i < stones.length; i++) {
        if (stones[i] > stones[i - 1] * 2) {
            return false;
        }
    }

    let stonePositions = new Set();
    stones.forEach(stone => {
        stonePositions.add(stone);
    })

    let lastStone = stones[stones.length - 1];

    let positions = [0];
    let jumps = [0];

    while (positions.length) {
        let position = positions.pop();
        let jumpDistance = jumps.pop();
        for (let i = jumpDistance - 1; i <= jumpDistance + 1; i++) {
            if (i <= 0) {
                continue;
            }
            let nextPosition = position + i;
            if (lastStone === nextPosition) {
                return true;
            }
            if (stonePositions.has(nextPosition)) {
                positions.push(nextPosition);
                jumps.push(i);
            }
        }
    }
    return false;
};




// My original approach:
// function canCross(stones){
//     let largestDistance = 1;
//     for (let i = 1; i < stones.length - 1; i++) {
//         let currentStone = stones[i];
//         let nextStone = stones[i + 1];
//         let distance = nextStone - currentStone;
//         let step = currentStone * 2
//         if (step >= distance) {
//             continue;
//         } else {
//             return false;
//         }
//         if (largestDistance - 1 === distance || largestDistance === distance || largestDistance + 1 === distance) {
//             if (distance > largestDistance) {
//                 largestDistance = distance;
//             }
//         } else {
//             return false;
//         }
//     }
//     return true
// }

console.log(canCross([0,1,3,5,6,8,12,17]));
console.log(canCross([0,1,2,3,4,8,9,11]));
console.log(canCross([0,1,3,4,5,7,9,10,12]));