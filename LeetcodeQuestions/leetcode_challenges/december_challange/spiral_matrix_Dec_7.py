
def generateMatrix(n):
    total = n ** 2
    # matrix = [[None] * n] * n dont do it mutates all indices....
    matrix = [[None for i in range(n)] for j in range(n)]
    counter = 1

    top = 0
    bottom = len(matrix) - 1
    left = 0
    right = len(matrix[0]) - 1

    while counter <= total:
        for i in range(left, right + 1):
            matrix[top][i] = counter
            counter += 1
        top += 1
        for i in range(top, bottom + 1):
            matrix[i][right] = counter
            counter += 1
        right -= 1
        for i in range(right, left - 1, -1):
            matrix[bottom][i] = counter
            counter += 1
        bottom -= 1
        for i in range(bottom, top - 1, -1):
            matrix[i][left] = counter
            counter += 1
        left += 1
    return matrix

print(generateMatrix(3))
