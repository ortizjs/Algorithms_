def min_rewards(scores)
    rewards = Array.new(scores.length) {1}
    
    for i in (1).upto(scores.length - 1)
        if scores[i] > scores[i - 1]
            rewards[i] = [rewards[i - 1] + 1, rewards[i]].max()
        end
    end

    for j in (scores.length - 2).downto(0) do
        if scores[j] > scores[j+1]
            rewards[j] = [rewards[j + 1] + 1, rewards[j]].max()
        end
    end
    rewards.sum()
end

p min_rewards([8, 4, 2, 1, 3, 6, 7, 9, 5])
p min_rewards([1])
p min_rewards([5, 10])
p min_rewards([10, 5])
p min_rewards([4, 2, 1, 3])
p min_rewards([0, 4, 2, 1, 3])
p min_rewards([2, 20, 13, 12, 11, 8, 4, 3, 1, 5, 6, 7, 9, 0])
p min_rewards([2, 1, 4, 3, 6, 5, 8, 7, 10, 9])
p min_rewards([800,400,20,10,30,61,70,90,17,21,22,13,12,11,8,4,2,1,3,6,7,9,0,68,55,67,57,60,51,661,50,65,53])