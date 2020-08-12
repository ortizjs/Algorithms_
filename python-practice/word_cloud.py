def split_words(string):
    words = []
    word_length = 0
    word_start_idx = 0

    for i, char in enumerate(string):
        if char.isalpha():
            if word_length == 0:
                word_start_idx = i
            word_length += 1
        else:
            word = string[word_start_idx:word_start_idx + word_length]
            words.append(word.lower())
            word_length = 0
    return words
        
def word_cloud(string):
    cloud = {}
    words = split_words(string)
    for word in words:
        if word in cloud:
            cloud[word] += 1
        else:
            cloud[word] = 1
    return cloud


print(word_cloud("After beating the eggs, Dana read the next step:"))
print(word_cloud("Add milk and eggs, then add flour and sugar."))
print(word_cloud("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."))
print(word_cloud("The bill came to five dollars."))
print(word_cloud("We came, we saw, we ate cake."))
print(word_cloud("Friends, Romans, countrymen! Let us eat cake."))
print(word_cloud("New tourists in New York often wait in long lines for cronuts."))
