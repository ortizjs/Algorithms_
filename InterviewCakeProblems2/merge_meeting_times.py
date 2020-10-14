def merge_meeting_times(meeting_times):
    sorted_meeting_times = sorted(meeting_times)
    merged_meeting_times = [sorted_meeting_times[0]]
    for i in range(1, len(sorted_meeting_times)):
        current_meeting_time = sorted_meeting_times[i]
        last_merged_meeting_time = merged_meeting_times[-1]
        if current_meeting_time['startTime'] <= last_merged_meeting_time['endTime']:
            last_merged_meeting_time['endTime'] = max(current_meeting_time['endTime'], last_merged_meeting_time['endTime'])
        else:
            merged_meeting_times.append(current_meeting_time)
    return merged_meeting_times
    

meeting_times1 = [{'startTime': 2, 'endTime': 3}, {'startTime': 6, 'endTime': 9}]
meeting_times2 = [
    {'startTime': 0, 'endTime': 1},
    {'startTime': 3, 'endTime': 5},
    {'startTime': 4, 'endTime': 8},
    {'startTime': 10,'endTime': 12},
    {'startTime': 9, 'endTime': 10},
]
meeting_times3 = [{'startTime': 1, 'endTime': 2}, {'startTime': 2, 'endTime': 3}]
meeting_times4 = [{'startTime': 1, 'endTime': 5}, {'startTime': 2, 'endTime': 3}]
meeting_times5 = [
    {'startTime': 1, 'endTime': 10},
    {'startTime': 2, 'endTime': 6},
    {'startTime': 3, 'endTime': 5},
    {'startTime': 7, 'endTime': 9},
]

print(merge_meeting_times(meeting_times1))
print(merge_meeting_times(meeting_times2))
print(merge_meeting_times(meeting_times3))
print(merge_meeting_times(meeting_times4))
print(merge_meeting_times(meeting_times5))
