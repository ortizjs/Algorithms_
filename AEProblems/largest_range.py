def largest_range(nums):
    longest_range = []
    table = {}
    top_longest = 0

    for num in nums:
        table[num] = True

    for num in nums:
        if not table[num]:
            continue
        else:
            table[num] = False
            left_point = num - 1
            right_point = num + 1
            current_longest = 1

            while left_point in table:
                table[left_point] = False
                left_point -= 1
                current_longest += 1
            while right_point in table:
                table[right_point] = False
                right_point += 1
                current_longest += 1

            if current_longest >= top_longest:
                top_longest = current_longest
                longest_range = [left_point + 1, right_point - 1]
    return longest_range


print(largest_range([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]))
