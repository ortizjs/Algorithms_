def in_flight_entertainment(flight_length, movie_lengths):
    seen_movies = set()

    for movie in movie_lengths:
        second_movie = flight_length - movie
        if second_movie in seen_movies:
            return True
        seen_movies.add(movie)
    return False

flight_one = 90
flight_two = 120
flight_three = 150

movie_lengths = [50, 30, 40, 90, 45, 60]
movie_lengths2 = [50, 20, 60, 80, 45, 110]

print in_flight_entertainment(flight_one, movie_lengths)
print in_flight_entertainment(flight_one, movie_lengths2)
print in_flight_entertainment(flight_two, movie_lengths)
print in_flight_entertainment(flight_two, movie_lengths2)
print in_flight_entertainment(flight_three, movie_lengths)
print in_flight_entertainment(flight_three, movie_lengths2)
