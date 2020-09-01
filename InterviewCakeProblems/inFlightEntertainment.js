function inFlightEntertainment(flight_length, movie_lengths) {
   let seenMovies = new Set();
   
   for (let i = 0; i < movie_lengths.length; i++) {
       let firstMovie = movie_lengths[i];
       let secondMovie = flight_length - firstMovie;
       if (seenMovies.has(secondMovie)) {
           return true;
       } else {
           seenMovies.add(firstMovie)
       }
   }
   return false;
}

console.log(inFlightEntertainment(100, [25, 30, 60, 75, 90, 80, 40, 70]))
console.log(inFlightEntertainment(100, [25, 30, 60, 85, 90, 80, 50]))