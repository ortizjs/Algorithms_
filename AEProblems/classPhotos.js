function classPhotos(redShirtHeights, blueShirtHeights) {
    let red = redShirtHeights.sort((a, b) => b - a);
    let blue = blueShirtHeights.sort((a, b) => b - a);
    let tallestRed = red[0];
    let tallestBlue = blue[0];
    if (tallestRed === tallestBlue) {
        return false
    } else if (tallestRed > tallestBlue) {
        return canForm(red, blue)
    } else {
        return canForm(blue, red)
    }
}

function canForm(red, blue) {
    for (let i = 0; i < red.length; i++) {
        if (red[i] <= blue[i]) {
            return false;
        }
    }
    return true;
}

console.log(classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]))
console.log(classPhotos([1, 2, 3, 4, 5], [2, 3, 4, 5, 6]))
console.log(classPhotos([1, 2, 3, 4, 5], [1, 3, 4, 5, 6]))