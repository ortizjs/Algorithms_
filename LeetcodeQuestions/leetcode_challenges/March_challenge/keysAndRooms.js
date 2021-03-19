var canVisitAllRooms = function (rooms) {
    let i = 0;
    let allRooms = new Array(rooms.length).fill(false);
    allRooms[0] = true;
    let availableKeys = [0]
    while (availableKeys.length) {
        let currentRoom = rooms[availableKeys.pop()];
        for (let key of currentRoom) {
            if (allRooms[key] === false) {
                allRooms[key] = true;
                availableKeys.push(key)
            }
        }
    }
    return allRooms.every(room => room === true)
};

console.log(canVisitAllRooms([[1], [2], [3], []]))
console.log(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]))