function highestProductOf3(intsArray) {
    if (intsArray.length < 3) {
        throw new Error("Input array must contain at least three integers...");
    }

    let highest = Math.max(intsArray[0], intsArray[1]);
    let lowest = Math.min(intsArray[0], intsArray[1]);

    let highestProductOf2 = intsArray[0] * intsArray[1];
    let lowestProductOf2 = intsArray[0] * intsArray[1];

    let highestProdOf3 = intsArray[0] * intsArray[1] * intsArray[2];

    for (let i = 2; i < intsArray.length; i++) {
        current = intsArray[i];
        highestProdOf3 = Math.max(highestProdOf3, current * highestProductOf2, current * lowestProductOf2);
        highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest);
        lowestProductOf2 = Math.min(lowestProductOf2, current * highest, current * lowest);
        highest = Math.max(current, highest);
        lowest = Math.min(current, lowest);
    }
    return highestProdOf3;
}


console.log(highestProductOf3([1, 10, -5, 1, -100]));
console.log(highestProductOf3([2, 5, 4, 7, 9, 1]));