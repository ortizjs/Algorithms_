function mergeMeetingTimes(meetingTimes) {
    let sortedMeetings = meetingTimes.sort((a,b) => {
        return a.startTime - b.startTime
    })
    let mergedMeetings = [sortedMeetings[0]]
    
    for (let i = 1; i < sortedMeetings.length; i++) {
        let lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
        let currentMeeting = sortedMeetings[i]
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
        } else {
            mergedMeetings.push(currentMeeting)
        }
    }
    return mergedMeetings
}

console.log(mergeMeetingTimes([{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }]))
console.log(mergeMeetingTimes([{ startTime: 2, endTime: 6 },{ startTime: 1, endTime: 10 },{ startTime: 7, endTime: 9 },{ startTime: 3, endTime: 5 },]))
console.log(mergeMeetingTimes([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]))
console.log(mergeMeetingTimes([{ startTime: 0, endTime: 1 },{ startTime: 3, endTime: 5 },{ startTime: 4, endTime: 8 },{ startTime: 10, endTime: 12 },{ startTime: 9, endTime: 10 }]))
