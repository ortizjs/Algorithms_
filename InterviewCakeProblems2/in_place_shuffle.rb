def get_random(floor, ceil)
    rand(floor..ceil)
end

def shuffle_in_place(arr)
    return arr if arr.length <= 1

    (0..arr.length - 2).each do |i|
        random_idx = get_random(i, arr.length - 1)
        if i != random_idx
            arr[i], arr[random_idx] = arr[random_idx], arr[i]
        end
    end
    arr
end

arr1 = [1, 2, 3, 4, 5, 6, 7];
arr2 = [11, 22, 33, 44, 55, 66, 77];
arr3 = [91, 33, 55, 64, 77, 21];

p shuffle_in_place(arr1)
p shuffle_in_place(arr2)
p shuffle_in_place(arr3)