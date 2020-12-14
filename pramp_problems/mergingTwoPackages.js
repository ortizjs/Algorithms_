function getIndicesOfItemWeights(arr, limit) {
    // your code goes here
    let pairs = []
    if (arr.length <= 1) {
        return pairs
    }

    let seenWeights = {};

    for (let i = 0; i < arr.length; i++) {
        let currentWeight = arr[i];
        let weightDiff = limit - currentWeight;

        if (seenWeights.hasOwnProperty(weightDiff)) {
            pairs = [i, seenWeights[weightDiff]];
            return pairs
        } else {
            seenWeights[currentWeight] = i;
        }
    }
    return pairs
}