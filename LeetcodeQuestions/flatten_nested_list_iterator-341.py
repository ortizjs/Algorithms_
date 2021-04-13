# """
# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
# """
# class NestedInteger(object):
#    def isInteger(self):
#        """
#        @return True if this NestedInteger holds a single integer, rather than a nested list.
#        :rtype bool
#        """
#
#    def getInteger(self):
#        """
#        @return the single integer that this NestedInteger holds, if it holds a single integer
#        Return None if this NestedInteger holds a nested list
#        :rtype int
#        """
#
#    def getList(self):
#        """
#        @return the nested list that this NestedInteger holds, if it holds a nested list
#        Return None if this NestedInteger holds a single integer
#        :rtype List[NestedInteger]
#        """

class NestedIterator(object):

    def __init__(self, nestedList):
        """
        Initialize your data structure here.
        :type nestedList: List[NestedInteger]
        """
        self.list = nestedList
        self.idx = -1
        self.flatten_list = []
        self.flatten(self.list)

    def next(self):
        """
        :rtype: int
        """
        self.idx += 1
        return self.flatten_list[self.idx]

    def hasNext(self):
        """
        :rtype: bool
        """
        return self.idx < len(self.flatten_list) - 1

    def flatten(self, list):
        for i in range(len(list)):
            current = list[i]
            if current.isInteger():
                self.flatten_list.append(current.getInteger())
            else:
                self.flatten(current.getList())


# Your NestedIterator object will be instantiated and called as such:
# i, v = NestedIterator(nestedList), []
# while i.hasNext(): v.append(i.next())
