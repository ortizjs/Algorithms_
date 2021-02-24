function tournamentWinner(competitions, results) {
    // Write your code here.
    let players = {}

    for (let i = 0; i < results.length; i++) {
        let score = results[i];
        if (score === 1) {
            let player = competitions[i][0];
            players[player] ? players[player] += 3 : players[player] = 3;
        } else {
            let player = competitions[i][1];
            players[player] ? players[player] += 3 : players[player] = 3;
        }
    }

    return Object.keys(players).reduce(function (a, b) {
        return players[a] > players[b] ? a : b
    })
}

console.log(tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1]))