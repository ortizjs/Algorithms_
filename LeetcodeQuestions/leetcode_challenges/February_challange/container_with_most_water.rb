def max_area(height)
    max_area = -Float::INFINITY
    i = 0
    j = height.length - 1
    
    while i < j
        current_area = [height[i], height[j]].min * (j - i)
        max_area = [max_area, current_area].max
        if (height[i] < height[j]) 
            i += 1
        else
            j -= 1
        end
    end
    max_area
end