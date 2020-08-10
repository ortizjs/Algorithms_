def merge_ranges(meeting_list):
    sorted_meetings = sorted(meeting_list)
    merged_meetings = [sorted_meetings[0]]
    for current_meeting_start, current_meeting_end in sorted_meetings:
        last_merged_meeting_start, last_merged_meeting_end = merged_meetings[-1]
        if current_meeting_start <= last_merged_meeting_end:
            merged_meetings[-1] = (last_merged_meeting_start, max(last_merged_meeting_end, current_meeting_end))
        else:
            merged_meetings.append((current_meeting_start, current_meeting_end))
    return merged_meetings



print merge_ranges([(1,3),(2,4)])
print merge_ranges([(0,1),(3,5),(4,8),(9,12),(10,12)])
print merge_ranges([(1, 10), (2, 6), (3, 5), (7, 9)])

    
