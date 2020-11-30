function isValidSequence(array, sequence) {
    let seqPointer = 0;
    let lastPosition = sequence.length;

    for (let i = 0; i < array.length; i++) {
        let current = array[i];
        if (current === sequence[seqPointer]) {
            seqPointer++;
        }
        if (seqPointer === lastPosition) {
            return true;
        }
    }
    return false;
}

console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 6, -1, 8, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [22, 25, 6]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [5, -1, 8, 10]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10], [25]))
console.log(isValidSequence([1, 1, 1, 1, 1], [1, 1, 1]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10],[5, 1, 22, 25, 6, -1, 8, 10, 12]))
console.log(isValidSequence([5, 1, 22, 25, 6, -1, 8, 10],[4, 5, 1, 22, 25, 6, -1, 8, 10]))
