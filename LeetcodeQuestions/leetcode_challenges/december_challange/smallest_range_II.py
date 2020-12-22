def smallestRangeII(A, K):
    A = sorted(A)
    min_val = A[0]
    max_val = A[-1]
    current = max_val - min_val
    for i in range(len(A) - 1):
        a = A[i]
        b = A[i+1]
        val_one = max_val - K
        val_two = min_val + K

        current = min(current, max(val_one, a + K) - min(val_two, b - K))
    return current


print(smallestRangeII([4, 2, 3, 4, 5, 6, 4], 3))
