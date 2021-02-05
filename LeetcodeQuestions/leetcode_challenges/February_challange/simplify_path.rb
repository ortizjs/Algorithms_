# @param {String} path
# @return {String}
def simplify_path(path)
    chars = path.split("/")
    stack = []
    special = Set.new([",","..",""])
    con_path = "/"
    
    chars.each do |char|
        if stack.length > 0 && char == ".."
            stack.pop
        elsif char != "." && char != ".." && char != ""
            stack << char
        end
    end
    con_path += stack.join("/")
    return con_path
end