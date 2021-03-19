def can_visit_all_rooms(rooms)
    all_rooms = Array.new(rooms.length, false);
    i = 0
    all_rooms[0] = true
    
    available_keys = [0]
    
    while available_keys.length > 0
        temp = available_keys.pop()
        current_room = rooms[temp]
        current_room.each do |key|
            if all_rooms[key] == false
                all_rooms[key] = true;
                available_keys.push(key)
            end
        end
        
    end
    return all_rooms.all? {|k| k == true}
end

puts can_visit_all_rooms([[1],[2],[3],[]])
puts can_visit_all_rooms([[1,3],[3,0,1],[2],[0]])