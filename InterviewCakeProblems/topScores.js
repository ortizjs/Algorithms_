function topScores(scores, maxScore){
    let countingArray = new Array(maxScore + 1).fill(0);
    let sortedArray = [];

    for (let i = 0; i < scores.length; i++) {
        let score = scores[i];
        countingArray[score] += 1;
    }

    for (let k = maxScore; k >= 0; k--) {
        let num = countingArray[k];
        while (num > 0) {
            sortedArray.push(k)
            num--;
        }
    }
    return sortedArray;
}
console.log(topScores([37, 89, 41, 65, 91, 53], 100))