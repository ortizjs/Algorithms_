def merge_sorted_lists(my_list, a_list):
    merged_list = []
    merge_list_size = len(my_list) + len(a_list)
    current_merged_list_index = 0
    my_current_index = 0
    alice_current_index = 0
    while current_merged_list_index < merge_list_size:
        my_list_done = my_current_index >= len(my_list)
        alice_list_done = alice_current_index >= len(a_list)
        if (not my_list_done and (alice_list_done or my_list[my_current_index] < a_list[alice_current_index])):
            merged_list.append(my_list[my_current_index])
            my_current_index += 1
        else:
            merged_list.append(a_list[alice_current_index])
            alice_current_index += 1
        current_merged_list_index += 1
    return merged_list
        
my_list = [3, 4, 6, 10, 11, 15, 20, 21]
alices_list = [1, 5, 8, 12, 14, 19]

print merge_sorted_lists(my_list, alices_list)
