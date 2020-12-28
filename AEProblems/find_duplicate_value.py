def find_duplicate_value(array):
    for i in range(len(array)):
        ele = abs(array[i])
        if array[ele - 1] < 0:
            return ele
        array[ele - 1] *= -1
    return -1
