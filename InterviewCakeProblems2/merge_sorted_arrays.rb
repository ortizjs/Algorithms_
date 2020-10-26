def merge_arrays(array_a, array_b)
    merged_arrays = []
    merged_arrays_length = array_a.length + array_b.length
    array_a_index = 0;
    array_b_index = 0;
    merged_arrays_index = 0

    while merged_arrays_index < merged_arrays_length
        is_array_a_exhausted = array_a_index >= array_a.length
        is_array_b_exhausted = array_b_index >= array_b.length

        if (!is_array_a_exhausted && 
            (is_array_b_exhausted || array_a[array_a_index] <= array_b[array_b_index])) 
                merged_arrays[merged_arrays_index] = array_a[array_a_index]
                array_a_index += 1
        else
            merged_arrays[merged_arrays_index] = array_b[array_b_index]
            array_b_index += 1
        end
        merged_arrays_index += 1
    end
    merged_arrays
end

my_array = [3, 4, 6, 10, 11, 15];
alices_array = [1, 5, 8, 12, 14, 19];

p merge_arrays(my_array, alices_array)