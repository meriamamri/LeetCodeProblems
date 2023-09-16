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
 * @return {boolean}
 */
var isValidBST = function(root) {
    
    let prev = null
    
    const traverseBst = (root) =>{
        if(!root) return true
        if(!traverseBst(root.left)) return false
        if(prev!==null && prev>=root.val) return false
        prev = root.val
        return traverseBst(root.right)
    }
    
    return traverseBst(root)
};


/*
var isValidBST = function(root) {
    
    let res = []
    
    const traverseBst = (root, res) =>{
        if(!root) return root
        if(root.left) traverseBst(root.left, res)
        res.push(root.val)
        if(root.right) traverseBst(root.right, res)
    }
    
    traverseBst(root, res)
    
    for(let i=1; i<res.length; i++){
        if(res[i]<=res[i-1]) return false
    }
    
    return true
};

*/