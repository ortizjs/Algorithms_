def sort_scores(unsorted_scores, highest_possible_score)
    counting_arr = Array.new(highest_possible_score + 1){0}
    sorted_scores = [];

    unsorted_scores.each do |score|
        counting_arr[score] += 1
    end
    
    i = counting_arr.length - 1

    while i >= 0
        score_freq = counting_arr[i]
        while score_freq > 0
            sorted_scores.append(i)
            score_freq -= 1
        end
        i -= 1
    end
    sorted_scores
end

unsorted_scores = [37, 89, 41, 65, 91, 53];
unsorted_scores2 = [37, 89, 41, 65, 37, 88, 100, 7, 21, 20, 10, 91, 53];
highest_possible_score = 100;

p (sort_scores(unsorted_scores, highest_possible_score));
p (sort_scores(unsorted_scores2, highest_possible_score));