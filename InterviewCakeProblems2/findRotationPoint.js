function rotationPoint(words) {
    let floorIdx = 0; 
    let ceilIdx = words.length - 1; 
    while (floorIdx + 1 < ceilIdx) { 
        let distance = ceilIdx - floorIdx; 
        let halfDistance = Math.floor(distance/2);
        let guessIdx = floorIdx + halfDistance;
        let guessWord = words[guessIdx];
        if (guessWord > words[floorIdx]) {
            floorIdx = guessIdx
        } else {
            ceilIdx = guessIdx
        }
    }
    return floorIdx + 1
}

const words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
];
words2 = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];

console.log(rotationPoint(words));
console.log(rotationPoint(words2));