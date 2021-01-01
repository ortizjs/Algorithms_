class Solution:
    def canFormArray(self, arr: List[int], pieces: List[List[int]]) -> bool:
        map = {}
        temp = []

        for p in pieces:
            map[p[0]] = p

        i = 0
        while i < len(arr):
            if arr[i] in map:
                sub_arr = map[arr[i]]
                for n in sub_arr:
                    if n == arr[i]:
                        temp.append(arr[i])
                        i += 1
                    else:
                        return False
            else:
                return False
        return True
