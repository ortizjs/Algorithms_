def increasingTriplet(nums):

    if (len(nums) < 3):
        return False
    seq = 1
    min_num = nums[0]

    max_seq = -sys.maxsize - 1

    store_min = min_num

    for i in range(1, len(nums)):
        if (nums[i] == min_num):
            continue
        elif nums[i] < min_num:
            min_num = nums[i]
            continue
        elif nums[i] < max_seq:
            max_seq = nums[i]

            store_min = min_num
        elif nums[i] > max_seq:
            seq += 1

            if seq == 3:
                return True
            max_seq = nums[i]
    return False
        # i = 0
        # while i < len(nums) - 2:
        #     print(i, "in i...")
        #     if nums[i] > nums[i+1]:
        #         i += 1
        #         continue
        #     j = i + 1
        #     while j < len(nums) - 1:
        #         print(j), "with j"
        #         if nums[j] > nums[j + 1]:
        #             j += 1
        #             continue
        #         k = j + 1
        #         while k < len(nums):
        #             print(k)
        #             if nums[i] < nums[j] < nums[k]:
        #                 return True
        #             k += 1
        #         j += 1
        #     i += 1
        # return False

nums = [2,1,5,0,4,6]

print(increasingTriplet(nums))
