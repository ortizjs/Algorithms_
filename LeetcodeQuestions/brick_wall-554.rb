# @param {Integer[][]} wall
# @return {Integer}
def least_bricks(wall)
    counts = {}
    max = 0
    
    wall.each do |row|
        sum = 0
        i = 0
        while i < row.length - 1
            sum += row[i]
            if i < row.length
                if !counts.has_key?(sum)
                    counts[sum] = 0
                end
                counts[sum] += 1
                max = [max, counts[sum]].max
            end
            i += 1
        end
    end
    return wall.length - max
end