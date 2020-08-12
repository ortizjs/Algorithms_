def inflight_entertainment(flight_length, movie_lengths):
    seen = set()
    for first_movie_len in movie_lengths:
        # first_movie_len = movie_lengths[m]
        second_movie_len = flight_length - first_movie_len
        if second_movie_len in seen:
            return True
        first_movie_len.add(first_movie_len)
    return False
