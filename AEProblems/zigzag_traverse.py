def zigzagTraverse(array):
    results = []
    row, col = 0, 0
    height = len(array) - 1
    width = len(array[0]) - 1
    goingDown = True

    while not isOutOfBounds(row, col, height, width):
        results.append(array[row][col])
        if goingDown:
            if row == height or col == 0:
                goingDown = False
                if row == height:
                    col += 1
                else:
                    row += 1
            else:
                row += 1
                col -= 1
        else:
            if col == width or row == 0:
                goingDown = True
                if col == width:
                    row += 1
                else:
                    col += 1
            else:
                row -= 1
                col += 1
    return results


def isOutOfBounds(row, col, height, width):
    return row < 0 or row > height or col < 0 or col > width
