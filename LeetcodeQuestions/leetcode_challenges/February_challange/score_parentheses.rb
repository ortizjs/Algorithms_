def score_of_parentheses(s)
    stack = []
    score = 0
    s.each_char do |char|
        if char == "("
            stack << score
            score = 0
        else
            score = stack.pop + [score * 2, 1].max
        end
    end
    score
end

puts score_of_parentheses("()")
puts score_of_parentheses("(())")
puts score_of_parentheses("()()")
puts score_of_parentheses("(()(()))")