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