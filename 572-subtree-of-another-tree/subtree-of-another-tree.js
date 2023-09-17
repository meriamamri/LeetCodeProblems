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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const isSameTree = (p, q) => {
        if(!p && !q) return true
        if(!p && q) return false
        if(p && !q) return false
        if(p.val !== q.val) return false
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
    };
    
    const findSubTree = (root) =>{
        let firstSubRoot = []
        let stack = [root]

        while(stack.length){
            let node = stack.pop()
            if(node.val === subRoot.val){
                let sameTree=isSameTree(node, subRoot)
                if(sameTree) return true
            } 
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
        
        return false
    }
    
    
    return findSubTree(root)
    
};