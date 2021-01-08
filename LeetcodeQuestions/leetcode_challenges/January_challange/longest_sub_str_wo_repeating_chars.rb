def length_of_longest_substring(s)
    max = 0
    i = 0
    j = 0
    repeated_chars = Set.new()
    
    while j < s.length
        if (!repeated_chars.include?(s[j])) 
            repeated_chars << s[j]
            j += 1
            max = [max, repeated_chars.size].max
        else
            repeated_chars.delete(s[i])
            i += 1
        end
    end
    return max
end