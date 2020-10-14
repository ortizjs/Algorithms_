def merge_meeting_times(meeting_times)
    sorted_meeting_times = meeting_times.sort {|a, b| a[:startTime] <=> b[:startTime]}
    merged_meeting_times = [sorted_meeting_times[0]]

    i = 1
    until i == sorted_meeting_times.length
        current_meeting_time = sorted_meeting_times[i]
        last_merged_meeting_time = merged_meeting_times[merged_meeting_times.length - 1]
        # p current_meeting_time
        if current_meeting_time[:startTime] <= last_merged_meeting_time[:endTime]
            last_merged_meeting_time[:endTime] = [current_meeting_time[:endTime], last_merged_meeting_time[:endTime]].max
        else
            merged_meeting_times << current_meeting_time
        end
        i += 1
    end
    merged_meeting_times
end

meeting_times1 = [{:startTime => 2, :endTime => 3}, {:startTime => 6, :endTime => 9}]
meeting_times2 = [
    {:startTime => 0, :endTime => 1},
    {:startTime => 3, :endTime => 5},
    {:startTime => 4, :endTime => 8},
    {:startTime => 10,:endTime => 12},
    {:startTime => 9, :endTime => 10},
]
meeting_times3 = [{:startTime => 1, :endTime => 2}, {:startTime => 2, :endTime => 3}]
meeting_times4 = [{:startTime => 1, :endTime => 5}, {:startTime => 2, :endTime => 3}]
meeting_times5 = [
    {:startTime => 1, :endTime => 10},
    {:startTime => 2, :endTime => 6},
    {:startTime => 3, :endTime => 5},
    {:startTime => 7, :endTime => 9},
]

print(merge_meeting_times(meeting_times1))
print(merge_meeting_times(meeting_times2))
print(merge_meeting_times(meeting_times3))
print(merge_meeting_times(meeting_times4))
print(merge_meeting_times(meeting_times5))
