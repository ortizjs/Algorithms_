def findErrorNums(nums):
    arr = [0] * len(nums)
    res = [0] * 2

    for num in nums:
        arr[num - 1] += 1

    for i in range(len(arr)):
        if arr[i] == 2:
            res[0] = i + 1
        if arr[i] == 0:
            res[1] = i + 1
    return res
