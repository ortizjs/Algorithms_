def isOutOfOrder(i, num, array):
	if i == 0:
		return num > array[i+1]
	elif i == len(array) - 1:
		return num < array[i - 1]
	return num < array[i - 1] or num > array[i + 1]


def subarraySort(array):
	min_val = float("inf")
    max_val = float("-inf")

    for i in range(len(array)):
        num = array[i]
        if isOutOfOrder(i, num, array):
            min_val = min(min_val, num)
            max_val = max(max_val, num)
    if min_val == float("inf"):
        return [-1, -1]

    sub_arr_left_idx = 0
    sub_arr_right_idx = len(array) - 1

    while array[sub_arr_left_idx] <= min_val:
        sub_arr_left_idx += 1

    while array[sub_arr_right_idx] >= max_val:
        sub_arr_right_idx -= 1

    return [sub_arr_left_idx, sub_arr_right_idx]
		
