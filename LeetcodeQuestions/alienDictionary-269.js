/**
 * @param {string[]} words
 * @return {string}
 * 
 * Let N be the total number of strings in the input list.
 * Let C be the total length of all the words in the input list, added together.
 * Let U be the total number of unique letters in the alien alphabet. While this is limited to
 * 26 in the question description, we'll still look at how it would impact the complexity if it
 * was not limited (as this could potentially be a follow-up question).
 * Time: O(C) Three parts of the algorith:
 *        - Identifying all the relations
 *        - putting them into an adjacency list
 *        - converting it into a valid alphabet order
 * 
 * in the worst case scenario the first and the second part require checking every letter of 
 * every word. 
 * (if the difference between two words was always in the last letter). This is O(|C|)
 * For the third part BFS has a cost of O(V + E) wher V is the number of vertices and E is the
 * number of Edges. This algorithm has the same time as we need to check every node and edge once. A node is visited once once all of its vertices are visited unlike traditional BFS where it is visited once for every edge.
 * 
 * We Know that there are N - 1 number of edges
 * There is an additional upper limit on the number of edges too—it is impossible for there to be more than one edge between each pair of nodes. With UU nodes, this means there can't be more than U^2 edges.
 * we know it is at most the smallest of these two values. Mathematically, we can say this is 
 * min(U^2, N - 1)
 * 
 * Going all the way back to the cost of breadth first search, we can now substiute in the number of nodes and the number of edges: V = U and E = min(U^2, N - 1) 
 * This gives us: O(V + E) = O(U + min(U^2, N - 1)) = O(U + min(U^2, N))
 * 
 * Finally, we need to combine the two parts: O(C) for the first and second parts, and O(U + min(U^2, N)) for the third part. When we have two independent parts, we add the costs together, as we don't necessarily know which is larger. After we've done this, we should look at the final formula and see whether or not we can actually draw any conclusions about which is larger. Adding them together, we initially get the following:

O(C) + O(U + min(U^2, N)) = O(C + U + min(U^2, N))

So, what do we know about the relative values of N, C, and U? Well, we know that N < C, as each word contains at least one character (remember, C is total characters across the words, not unique characters). Additionally, U < C because there can't be more unique characters than there are characters.

In summary, C is the biggest of the three, and N and U are smaller, although we don't know which is smaller out of those two.

So for starters, we know that the UU bit is insignificant compared to the C. Therefore, we can just remove it:

O(C + U + min(U^2, N)) → O(C + min(U^2, N))
Now, to simplify the rest, consider two cases:
If U^2 is smaller than N, then min(U^2, N) = U^2 . By definition, we've just said that U^2 is smaller than N, which is in turn smaller than C, and so U^2 is definitely less than C. This leaves us with O(C).

If U^2 is larger than N, then min(U^2, N) = N. Because C > N, we're left with O(C).


So in all cases, we know that C > min(U^2, N). This gives us a final time complexity of O(C).

Space: O(1) or O(U + min(U^2, N))
 */
var alienOrder = function(words) {
    //Step 0: Create data structures and find all unique letters.
    let adjList = new Map();
    let counts = new Map();
    
    for (let word of words) {
        for (let char of word) {
            counts.set(char, 0);
            adjList.set(char, []);
        }
        
    }
    
    //Step 1: FInd all edges.
    for (let i = 0; i < words.length - 1; i++) {
        let word1 = words[i];
        let word2 = words[i + 1];
        //Check that word2 is nota prefix of word1;
        if (word1.length > word2.length && word1.startsWith(word2)) {
            return "";
        }
        //Find the first non match and insert the corresponding relation.
        for (let j = 0; j < Math.min(word1.length, word2.length); j++) {
            if (word1[j] !== word2[j]) {
                adjList.get(word1.charAt(j)).push(word2.charAt(j));
                counts.set(word2.charAt(j), counts.get(word2.charAt(j)) + 1);
                break;
            }
        }
    }
    
    //Step 2: Breadth-First-Search.
    let sb = "";
    let queue = [];
    for (let key of counts.keys()) {
        if (counts.get(key) === 0) {
            queue.push(key)
        }
    }
    
    while (queue.length) {
        let char = queue.shift();
        sb += char
        
        for (let next of adjList.get(char)) {
            counts.set(next, counts.get(next) - 1);
            if (counts.get(next) === 0) {
                queue.push(next);
            }
        }
    }
    
    if (sb.length < counts.size) {
        return "";
    }
    return sb
};