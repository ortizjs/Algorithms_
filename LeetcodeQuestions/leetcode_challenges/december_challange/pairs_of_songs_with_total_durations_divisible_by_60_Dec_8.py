from collections import defaultdict

def num_pairs_divisible_by_60(time):
    if len(time) == 2 and time[0] + time[1] % 60 == 0:
        return 1
    
    mod_freqs = defaultdict(int)
    songs = 0

    for song in time:
        mod = song % 60

        if mod == 0:
            songs += mod_freqs[0]
        else:
            songs += mod_freqs[60 - mod]
        mod_freqs[mod] += 1

    return songs


print(num_pairs_divisible_by_60([30, 20, 150, 100, 40]))
