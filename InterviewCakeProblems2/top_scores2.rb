def top_scores(scores, highest_score)
    counting_arr = Array.new(highest_score + 1) {0}
    final_arr = []

    scores.each do |score|
        counting_arr[score] += 1
    end
    i = counting_arr.length - 1
    while i >= 0
        num = counting_arr[i]
        while num > 0
            final_arr << i
            num -= 1
        end
        i -= 1
    end
    final_arr
end

unsorted_scores = [37, 89, 41, 65, 91, 53];
unsorted_scores2 = [37, 89, 41, 65, 37, 88, 100, 7, 21, 20, 10, 91, 53];
highest_possible_score = 100;

p (top_scores(unsorted_scores, highest_possible_score));
p (top_scores(unsorted_scores2, highest_possible_score));