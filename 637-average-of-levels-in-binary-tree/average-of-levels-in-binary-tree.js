/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let result = []
    let queue = [root]
    while(queue.length>0){
        let nodesLavel = 0
        let n = queue.length
        for(let i=0; i<n; i++){
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            nodesLavel+=node.val
        }
        let average = nodesLavel/n
        result.push(average)
    }

    return result
};