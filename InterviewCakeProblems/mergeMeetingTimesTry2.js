function mergeMeetingTimes(unsortedMeetingTimes) {
    let sortedMeetingTimes = unsortedMeetingTimes.sort((a, b) => {
        return a.startTime - b.startTime
    });

    let mergedMeetings = [sortedMeetingTimes[0]];
    
    for (let i = 1; i < sortedMeetingTimes.length; i++) {
        let lastMergedMeetingTime = mergedMeetings[mergedMeetings.length - 1];
        let currentMeetingTime = sortedMeetingTimes[i];

        if (currentMeetingTime.startTime <= lastMergedMeetingTime.endTime) {
            lastMergedMeetingTime.endTime = Math.max(currentMeetingTime.endTime, lastMergedMeetingTime.endTime);
        } else {
            mergedMeetings.push(currentMeetingTime);
        }
    }
    return mergedMeetings
}

let meetingTimes = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]

console.log(mergeMeetingTimes(meetingTimes))
console.log(mergeMeetingTimes([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]))
console.log(mergeMeetingTimes([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]))
console.log(mergeMeetingTimes([{ startTime: 1, endTime: 10 },{ startTime: 2, endTime: 6 },{ startTime: 3, endTime: 5 },{ startTime: 7, endTime: 9 }]))