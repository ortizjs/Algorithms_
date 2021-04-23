def count_binary_substrings(s)
    counter = 0
    prev_block = 0
    curr_block = 1
    
    current = s[0]
    
    (1...s.length).each do |i|
        if current == s[i]
            curr_block += 1
        else 
            counter += [curr_block, prev_block].min
            prev_block = curr_block
            curr_block = 1
        end
        current = s[i]
    end
    counter += [curr_block, prev_block].min
    counter
end

puts count_binary_substrings("00110011")
puts count_binary_substrings("10101")