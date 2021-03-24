function advantageCount(A, B) {
    let indexesOfB = B.map((e, i) => i).sort((a, b) => B[a] - B[b]);
    let sortedA = A.sort((a, b) => a - b);
    let answer = new Array(A.length);
    let unused = [];
    let i = 0;

    for (let idx of indexesOfB) {
        while (i < A.length && sortedA[i] <= B[idx]) {
            unused.push(sortedA[i]);
            i++;
        }

        if (i === A.length) {
            answer[idx] = unused.pop();
        } else {
            answer[idx] = sortedA[i];
            i++;
        }
    }
    return answer;
}

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));