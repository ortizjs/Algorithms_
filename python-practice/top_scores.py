def top_scores(unsorted_scores, highest_possible_score):
    score_count = [0] * (highest_possible_score + 1)
    sorted_scores = []
    for score in unsorted_scores:
        score_count[score] += 1
    print(score_count, len(score_count))
    
    for score in range(len(score_count) -1, -1, -1):
        count = score_count[score]
        while (count > 0):
            sorted_scores.append(score)
            count -= 1
    return sorted_scores

print(top_scores([37, 89, 41, 65, 91, 53], 100))