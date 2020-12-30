def zigzagTraverse(array)
    results = []
    row = 0
    col = 0
    height = array.length - 1
    width = array[0].length - 1
    goingDown = true

    while !isOutOfBound(row, col, height, width)
        results.push(array[row][col])
        if goingDown == true
            if row == height || col == 0
                goingDown = false
                if row == height
                    col += 1
                else
                    row += 1
                end
            else
                row += 1
                col -= 1
            end
        else
            if row == 0 || col == width
                goingDown = true
                if col == width
                    row += 1
                else
                    col += 1
                end
            else
                row -= 1
                col += 1
            end
        end
    end
    return results
end

def isOutOfBound(row, col, height, width)
    return row < 0 || row > height || col < 0 || col > width
end

p zigzagTraverse([[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]])
p zigzagTraverse([[1]])
p zigzagTraverse([[1, 2, 3, 4, 5]])
p zigzagTraverse([[1], [2], [3], [4], [5]])
p zigzagTraverse([[1, 3], [2, 4], [5, 7], [6, 8], [9, 10]])
p zigzagTraverse([[1, 3, 4, 7, 8], [2, 5, 6, 9, 10]])
p zigzagTraverse([
    [1, 3, 4, 10, 11],
    [2, 5, 9, 12, 19],
    [6, 8, 13, 18, 20],
    [7, 14, 17, 21, 24],
    [15, 16, 22, 23, 25]
  ])
p zigzagTraverse([
    [1, 3, 4, 10, 11, 20],
    [2, 5, 9, 12, 19, 21],
    [6, 8, 13, 18, 22, 27],
    [7, 14, 17, 23, 26, 28],
    [15, 16, 24, 25, 29, 30]
  ])
p zigzagTraverse([
    [1, 3, 4, 10, 11],
    [2, 5, 9, 12, 20],
    [6, 8, 13, 19, 21],
    [7, 14, 18, 22, 27],
    [15, 17, 23, 26, 28],
    [16, 24, 25, 29, 30]
  ])
p zigzagTraverse([
    [1, 21, -3, 4, 15, 6, -7, 88, 9],
    [10, 11, 112, 12, 20, -1, -2, -3, -4],
    [6, 8, 113, 19, 21, 0, 0, 0, 0],
    [7, 2, 18, 22, -27, 12, 32, -111, 66],
    [15, 17, 23, 226, 28, -28, -226, -23, -17],
    [16, 24, 27, 299, 30, 29, 32, 31, 88]
  ])