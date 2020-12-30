# @param {Integer[][]} matrix
# @return {Integer[]}

def isOutOfBounds(row, col, height, width)
    return row < 0 || row > height || col < 0 || col > width
end

def find_diagonal_order(matrix)
    if matrix.length == 0
        return matrix
    end
    
    values = []
    goingRight = true
    row = 0
    col = 0
    height = matrix.length - 1
    width = matrix[0].length - 1
    
    while !isOutOfBounds(row, col, height, width)
        values.push(matrix[row][col])
        if goingRight == true
            if row == 0 || col == width
                goingRight = false
                if col == width
                    row += 1
                else
                    col += 1
                end
            else
                row -= 1
                col += 1
            end
        else
            if row == height || col == 0
                goingRight = true
                if row == height
                    col += 1
                else
                    row += 1
                end
            else
                row += 1
                col -= 1
            end
        end
    end
    
    return values
end

p find_diagonal_order([[1,2,3],[4,5,6],[7,8,9]])