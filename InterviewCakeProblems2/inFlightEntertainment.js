
function inFlightEntertainment(flightLength, movieLengths) {
    let seenMovies = new Set();
    
    for (let i = 0; i < movieLengths.length; i++) {
        let currentMovie = movieLengths[i];
        let secondMovie = flightLength - currentMovie;
        if (seenMovies.has(secondMovie)) {
            return true
        }
        seenMovies.add(currentMovie);
    }
    return false;
}


let flightOne = 90;
let flightTwo = 120;
let flightThree = 150;

let movieLengths = [50, 30, 40, 90, 45, 60];
let movieLengths2 = [50, 20, 60, 80, 45, 110];

console.log(inFlightEntertainment(flightOne, movieLengths))
console.log(inFlightEntertainment(flightOne, movieLengths2))
console.log(inFlightEntertainment(flightTwo, movieLengths))
console.log(inFlightEntertainment(flightTwo, movieLengths2))
console.log(inFlightEntertainment(flightThree, movieLengths))
console.log(inFlightEntertainment(flightThree, movieLengths2))
