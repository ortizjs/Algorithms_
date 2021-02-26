def validate_stack_sequences(pushed, popped)
    i = 0 
    j = 0
    stack = []
    
    while j < popped.length
        if popped[j] == stack[stack.length - 1]
            stack.pop()
            j += 1
        elsif i < pushed.length
            stack.push(pushed[i])
            i += 1
        else
            return false
        end
    end
    return true
end
