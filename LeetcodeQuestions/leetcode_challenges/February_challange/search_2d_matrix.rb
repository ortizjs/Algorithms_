def search_matrix(matrix, target)
    row = 0
    col = matrix[0].length - 1
    
    while row < matrix.length && col >= 0
        if matrix[row][col] == target
            return true;
        elsif matrix[row][col] > target
            col -= 1;
        else
            row += 1;
        end 
    end
    return false
end

puts search_matrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5)

puts search_matrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20)

puts search_matrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 25)