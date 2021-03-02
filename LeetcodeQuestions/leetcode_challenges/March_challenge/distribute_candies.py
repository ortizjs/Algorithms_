def distributeCandies(candyType):
    half = len(candyType) / 2
    types_of_candies = set(candyType)
    if len(types_of_candies) >= half:
        return half
    return len(types_of_candies)


print(distributeCandies([1, 1, 2, 2, 3, 3]))
print(distributeCandies([1, 1, 2, 3]))
print(distributeCandies([6, 6, 6, 6]))
