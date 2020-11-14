def top_scores(scores, highest_score):
    counting_arr = [0] * (highest_score + 1)
    final_arr = []

    for i in range(0, len(scores)):
        num = scores[i]
        counting_arr[num] += 1
    
    for i in range(len(counting_arr) - 1, 0, -1):
        num = counting_arr[i]
        while num > 0:
            final_arr.append(i)
            num -= 1
    return final_arr



unsorted_scores = [37, 89, 41, 65, 91, 53]
unsorted_scores2 = [37, 89, 41, 65, 37, 88, 100, 7, 21, 20, 10, 91, 53]
highest_possible_score = 100

print(top_scores(unsorted_scores, highest_possible_score))
print(top_scores(unsorted_scores2, highest_possible_score))
