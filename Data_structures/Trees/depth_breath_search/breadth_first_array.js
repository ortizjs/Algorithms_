function breadthFirstArray(root) {
    let queue = [root];
    results = [];
    while (queue.length) {
        let node = queue.shift();
        results.push(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return results;
}

module.exports = {
    breadthFirstArray
};