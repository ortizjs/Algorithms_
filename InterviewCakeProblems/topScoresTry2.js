function topScores(unsortedScores, highestPossibleScore) {
    let countingArray = new Array(highestPossibleScore + 1).fill(0);
    let sortedScores = [];
    for (let i = 0; i < unsortedScores.length; i++) {
        let currentNum = unsortedScores[i];
        countingArray[currentNum]++;
    }

    for (let j = countingArray.length; j >= 0; j--) {
        let currentNum = countingArray[j];
        while (currentNum > 0) {
            sortedScores.push(j)
            currentNum--;
        }
    }
    return sortedScores;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(topScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
console.log(topScores([33,45,65,78,99,12,34,100,0],100))