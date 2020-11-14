def merge_meeting_times(meeting_times):
    sorted_meeting_times = sorted(meeting_times)
    merged_meetings = [sorted_meeting_times[0]]

    for current_meeting_start, current_meeting_end in sorted_meeting_times[1:]:
        last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
        if current_meeting_start <= last_merged_meeting_end:
            merged_meetings[-1] = (last_merged_meeting_start, max(last_merged_meeting_end, current_meeting_end))
        else:
            merged_meetings.append((current_meeting_start, current_meeting_end))
    return merged_meetings

meeting_times1 = [(2, 3), (6, 9)]
meeting_times2 = [
    (0, 1),
    (3, 5),
    (4, 8),
    (10, 12),
    (9, 10)
]
meeting_times3 = [(1, 2), (2, 3)]
meeting_times4 = [(1, 5), (2, 3)]
meeting_times5 = [
    (1, 10),
    (2, 6),
    (3, 5),
    (7, 9)
]

print(merge_meeting_times(meeting_times1))
print(merge_meeting_times(meeting_times2))
print(merge_meeting_times(meeting_times3))
print(merge_meeting_times(meeting_times4))
print(merge_meeting_times(meeting_times5))
