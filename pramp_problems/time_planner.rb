def meeting_planner(slotsA, slotsB, dur)
  # your code goes here
  a = 0 
  b = 0
  
  while a < slotsA.length && b < slotsB.length
    personA = slotsA[a]
    personB = slotsB[b]
    start = [personA[0], personB[0]].max()
    ennd = [personA[1], personB[1]].min()
    overlap = (ennd - start).abs()
    if overlap >= dur
      return [start, start + dur]
    else
      if personA[1] > personB[1]
        b += 1
      elsif personB[1] > personA[1]
        a += 1
      else
        a += 1
        b += 1
      end
    end
  end
  return []
end