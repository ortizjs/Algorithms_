def sort_scores(unsorted_scores, highest_possible_score):
    counting_list = [0] * (highest_possible_score + 1)
    sorted_scores = []

    for score in unsorted_scores:
        counting_list[score] += 1

    # print counting_list
    
    for i in range(len(counting_list) - 1, 0, -1):
        scoreFreq = counting_list[i]
        # print scoreFreq
        while scoreFreq > 0:
            sorted_scores.append(i)
            scoreFreq -= 1
        i -= 1
    return sorted_scores



unsorted_scores = [37, 89, 41, 65, 91, 53]
unsorted_scores2 = [37, 89, 41, 65, 37, 88, 100, 7, 21, 20, 10, 91, 53]
highest_possible_score = 100

print (sort_scores(unsorted_scores, highest_possible_score))
print (sort_scores(unsorted_scores2, highest_possible_score))
