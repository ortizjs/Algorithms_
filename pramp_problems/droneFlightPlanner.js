function calcDroneMinEnergy(route) {
    // your code goes here
    let minEnergy = 0
    let netEnergy = 0

    for (let i = 0; i < route.length; i++) {
        if (i === route.length - 1) {
            return minEnergy
        }
        let currentAlt = route[i][2]
        let nextAlt = route[i + 1][2];
        let distance = nextAlt - currentAlt;

        if (distance > netEnergy) {
            return Math.abs(netEnergy - distance);
        } else if (currentAlt > nextAlt) {
            netEnergy += Math.abs(distance);
        } else if (currentAlt < nextAlt) {
            netEnergy -= Math.abs(distance);
            minEnergy = netEnergy
        }
    }
    return minEnergy

}


console.log(calcDroneMinEnergy([[0, 2, 10], [3, 5, 0], [9, 20, 6], [10, 12, 15], [10, 10, 8]]))