function topScores(scores, highestScore){
    let countingArr = new Array(highestScore + 1).fill(0);
    let finalArr = [];

    scores.forEach(num => {
        countingArr[num]++;
    })

    for (let i = countingArr.length - 1; i >= 0; i--) {
        let num = countingArr[i];
        while (num > 0) {
            finalArr.push(i);
            num--;
        }
    }
    return finalArr;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
console.log(topScores(unsortedScores, 100));