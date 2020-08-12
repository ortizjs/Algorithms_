function topScores(scores, maxScore){
    let count_array = new Array(maxScore + 1).fill(0)
    let sorted_scores = []

    for (var i = 0; i < scores.length; i++){
        let score = scores[i]
        count_array[score]++
    }
    
    for (let j = count_array.length - 1; j >= 0; j--) {
        let count = count_array[j];
        while (count > 0) {
            sorted_scores.push(j)
            count--
        }
    }
    return sorted_scores
}
console.log(topScores([37, 89, 41, 65, 91, 53], 100))