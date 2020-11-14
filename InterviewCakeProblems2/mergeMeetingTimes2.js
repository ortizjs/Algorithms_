function mergeMeetingTimes(meetingTimes){
    sortedMeetingTimes = meetingTimes.sort( (a,b) => a.startTime - b.startTime);
    
    mergedMeetingTimes = [sortedMeetingTimes[0]];

    for (let i = 1; i < sortedMeetingTimes.length; i++) {
        let currentMeeting = sortedMeetingTimes[i];
        let lastMergedMeetingTime = mergedMeetingTimes[mergedMeetingTimes.length - 1]
        if (currentMeeting.startTime <= lastMergedMeetingTime.endTime) {
            lastMergedMeetingTime.endTime = Math.max(currentMeeting.endTime, lastMergedMeetingTime.endTime);
        } else {
            mergedMeetingTimes.push(currentMeeting)
        }
    }
    return mergedMeetingTimes
}

meetingTimes1 = [{ startTime: 2, endTime: 3 }, { startTime: 6, endTime: 9 }]
meetingTimes2 = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 },
]
meetingTimes3 = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }];
meetingTimes4 = [{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }];
meetingTimes5 = [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 },
];

console.log(mergeMeetingTimes(meetingTimes1));
console.log(mergeMeetingTimes(meetingTimes2));
console.log(mergeMeetingTimes(meetingTimes3));
console.log(mergeMeetingTimes(meetingTimes4));
console.log(mergeMeetingTimes(meetingTimes5));