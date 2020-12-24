function calcDroneMinEnergy(route) {
    // your code goes here
    let minEnergy = 0
    let netEnergy = 0

    for (let i=0
         i < route.length
         i++) {

        if (i === route.length - 1) {
            return minEnergy
        }

        let currentPoint = route[i]
        let currAlt = currentPoint[2]

        let nextPoint = route[i + 1]
        let nextAlt = nextPoint[2]

        let disToTravel = nextAlt - currAlt
        if (disToTravel > netEnergy) {
            return Math.abs(disToTravel - netEnergy)
        } else if (nextAlt < currAlt) {
            netEnergy += (currAlt - nextAlt)
        } else if (nextAlt > currAlt) {
            netEnergy -= nextAlt
        } else {
            minEnergy = netEnergy
        }
    }
    return Math.abs(minEnergy)
}
