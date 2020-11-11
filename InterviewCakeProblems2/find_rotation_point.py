import math
def find_rotation_point(words):
    floor_idx = 0
    ceil_idx = len(words) - 1

    while floor_idx < ceil_idx:
        distance = ceil_idx - floor_idx
        half_distance = int(math.floor(distance/2))
        guess_idx = floor_idx + half_distance
        guess_word = words[guess_idx]
        if guess_word <= words[floor_idx]:
            ceil_idx = guess_idx
        else:
            floor_idx = guess_idx
    return floor_idx + 1


words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',  # // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]
words2 = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i']

print find_rotation_point(words)
print find_rotation_point(words2)
