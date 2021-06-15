/**
 * @param {string[][]} accounts
 * @return {string[][]}
 * 
 * Time: O(Sum of (A sub * i log A)) where A is the length of each account, and log A as we need to sort all of the grouped email for every distinct account.
 * 
 * Space: O(Sum of A sub i) which represents the space used by our graph and our search.
 */
var accountsMerge = function(accounts) {
    let merged = [];
    let graph = {};
    let emailToName = {};
    let visited = new Set();

    for (let account of accounts) {
        let name = account[0];
        let firstEmail = account[1];

        for (let i = 1; i < account.length; i++) {
            let email = account[i];
            emailToName[email] = name;
            addEdge(graph, firstEmail, email)
            addEdge(graph, email, firstEmail)
        }
    }

    for (let key in graph) {
        let currentSetOfEmails = new Set();
        if (!visited.has(key)) {
            dfs(graph, key, visited, currentSetOfEmails)
        }

        if (currentSetOfEmails.size > 0) {
            let emailsArray = Array.from(currentSetOfEmails).sort();
            let name = emailToName[emailsArray[0]];
            merged.push([name, ...emailsArray])
        }
    }
    return merged;
};

function addEdge(graph, from, to) {
    if (from in graph) {
        graph[from].push(to);
    } else {
        graph[from] = [to];
    }
}

function dfs(graph, source, visited, currentSetOfEmails) {
    visited.add(source);
    currentSetOfEmails.add(source);

    for (let neighbor of graph[source]) {
        if (!visited.has(neighbor)) {
            dfs(graph, neighbor, visited, currentSetOfEmails);
        }
    }
}