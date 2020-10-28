require 'set'

def in_flight_entertainment(flight_length, movie_lengths)
    seen_movies = Set.new()

    movie_lengths.each do |movie|
        second_movie = flight_length - movie
        return true if seen_movies.include?(second_movie)
        seen_movies << movie
    end
    false
end

flight_one = 90;
flight_two = 120;
flight_three = 150;

movie_lengths = [50, 30, 40, 90, 45, 60];
movie_lengths2 = [50, 20, 60, 80, 45, 110];

puts in_flight_entertainment(flight_one, movie_lengths)
puts in_flight_entertainment(flight_one, movie_lengths2)
puts in_flight_entertainment(flight_two, movie_lengths)
puts in_flight_entertainment(flight_two, movie_lengths2)
puts in_flight_entertainment(flight_three, movie_lengths)
puts in_flight_entertainment(flight_three, movie_lengths2)