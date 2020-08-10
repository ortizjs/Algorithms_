function inFlightEntertainment(flight_length, movie_lengths) {
    let movies = new Set();
    let first_movie;
    for (let i = 0; i < movie_lengths.length; i++){
        first_movie = movie_lengths[i];
        let second_movie = flight_length - first_movie;
        if (movies.has(second_movie)) {
            return true;
        }
        movies.add(first_movie)
    }
    return false;
}