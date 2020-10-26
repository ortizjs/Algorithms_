def merge_lists(list_a, list_b):
    list_a_idx = 0
    list_b_idx = 0
    merged_list_idx = 0
    merged_list_length = len(list_a) + len(list_b)
    merged_list = [None] * merged_list_length

    while (merged_list_idx < merged_list_length):
        is_list_a_exhausted = list_a_idx >= len(list_a)
        is_list_b_exhausted = list_b_idx >= len(list_b)
        if (not is_list_a_exhausted and (is_list_b_exhausted or list_a[list_a_idx] <= list_b[list_b_idx])):
            merged_list[merged_list_idx] = list_a[list_a_idx]
            list_a_idx += 1
        else:
            merged_list[merged_list_idx] = list_b[list_b_idx]
            list_b_idx += 1
        merged_list_idx += 1
    return merged_list


my_array = [3, 4, 6, 10, 11, 15]
alices_array = [1, 5, 8, 12, 14, 19]

print merge_lists(my_array, alices_array)
