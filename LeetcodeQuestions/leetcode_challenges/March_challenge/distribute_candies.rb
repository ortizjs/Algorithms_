require "set"
def distribute_candies(candy_type)
    half = candy_type.length / 2
    types_of_candy = candy_type.to_set
    if types_of_candy.length >= half
        return half
    end
    return types_of_candy.length
end

puts distribute_candies([1, 1, 2, 2, 3, 3])
puts distribute_candies([1, 1, 2, 3])
puts distribute_candies([6, 6, 6, 6])