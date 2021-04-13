# This is the interface that allows for creating nested lists.
# You should not implement it, or speculate about its implementation
#
#class NestedInteger
#    def is_integer()
#        """
#        Return true if this NestedInteger holds a single integer, rather than a nested list.
#        @return {Boolean}
#        """
#
#    def get_integer()
#        """
#        Return the single integer that this NestedInteger holds, if it holds a single integer
#        Return nil if this NestedInteger holds a nested list
#        @return {Integer}
#        """
#
#    def get_list()
#        """
#        Return the nested list that this NestedInteger holds, if it holds a nested list
#        Return nil if this NestedInteger holds a single integer
#        @return {NestedInteger[]}
#        """

class NestedIterator
    # @param {NestedInteger[]} nested_list
    def initialize(nested_list)
        @flatten_list = []
        @idx = -1
        @list = nested_list
        self.flatten(@list)
    end

    # @return {Boolean}
    def has_next
        @idx < @flatten_list.length - 1
    end

    # @return {Integer}
    def next
        @idx += 1
        return @flatten_list[@idx]
    end
    
    def flatten(list)
        list.each do |current|
            if current.is_integer()
                @flatten_list << current.get_integer()
            else
                self.flatten(current.get_list())
            end
        end
    end
end

# Your NestedIterator will be called like this:
# i, v = NestedIterator.new(nested_list), []
# while i.has_next()
#    v << i.next
# end