function sortScores(unsortedScores, highestPossibleScore) {
    let countingArr = new Array(highestPossibleScore + 1).fill(0);
    let sortedScores = [];

    for (let i = 0; i < unsortedScores.length; i++) {
        let currentScore = unsortedScores[i];
        countingArr[currentScore]++;
    }
    
    for (let i = countingArr.length - 1; i >= 0; i--) {
        let scoreFreq = countingArr[i];
        if (scoreFreq > 0) {
            while (scoreFreq > 0) {
                sortedScores.push(i);
                scoreFreq--;
            }
        }
    }
    return sortedScores;

};

const unsortedScores = [37, 89, 41, 65, 91, 53];
const unsortedScores2 = [37, 89, 41, 65, 37, 88, 100, 7, 21, 20, 10, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE));
console.log(sortScores(unsortedScores2, HIGHEST_POSSIBLE_SCORE));