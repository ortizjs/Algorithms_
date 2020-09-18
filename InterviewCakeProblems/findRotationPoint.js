function findRotationPoint(words) {
    let floorIdx = 0;
    let ceilIdx = words.length - 1;

    while (floorIdx < ceilIdx) {
        let distance = ceilIdx - floorIdx;
        let halfDistance = Math.floor(distance/2);
        let guessIdx = floorIdx + halfDistance;
        let guessVal = words[guessIdx];

        if (guessVal >= words[0]) {
            floorIdx = guessIdx;
        } else {
            ceilIdx = guessIdx;
        }

        if (floorIdx + 1 === ceilIdx) {
            break;
        }
    }
    return ceilIdx;
}

let chars = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']
let words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', 
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];

console.log(findRotationPoint(chars));
console.log(findRotationPoint(words))