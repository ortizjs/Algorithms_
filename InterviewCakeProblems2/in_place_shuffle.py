from random import randint
def get_random(floor, ceil):
    return int(randint(floor, ceil))

def in_place_shuffle(arr):
    if len(arr) <= 1:
        return arr
    
    for i in range(0, len(arr) - 1):
        random_idx = get_random(i, len(arr) - 1)
        if i != random_idx:
            arr[i], arr[random_idx] = arr[random_idx], arr[i]
    return arr

arr1 = [1, 2, 3, 4, 5, 6, 7]
arr2 = [11, 22, 33, 44, 55, 66, 77]
arr3 = [91, 33, 55, 64, 77, 21]

print in_place_shuffle(arr1)
print in_place_shuffle(arr2)
print in_place_shuffle(arr3)
