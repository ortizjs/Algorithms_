class Solition(Object):

    def checkRestOfList(self, arr):
        for i in range(len(arr) - 1):
            num = arr[i]
            num2 = arr[i + 1]
            if num2 >= num:
                return False
        return True

    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3 or arr[0] >= arr[1]:
            return False

        for i in range(len(arr) - 1):
            num_one = arr[i]
            num_two = arr[i + 1]
            if num_two < num_one:
                return self.checkRestOfList(arr[i + 1:])
            elif num_one == num_two:
                return False
        return False

    # def validMountainArray(self, arr: List[int]) -> bool:
    #      size = len(arr) - 1
    #       i = 0
    #        while i + 1 <= size and arr[i] < arr[i + 1]:
    #             i += 1
    #         if i == 0 or i == size:
    #             return False
    #         while i + 1 <= size and arr[i] > arr[i + 1]:
    #             i += 1
    #         return i == size
