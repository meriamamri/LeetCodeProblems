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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let arr = []
    
    const traversalBST = (root,arr) =>{
        if(!root) return root
        if(root.left) traversalBST(root.left, arr)
        arr.push(root.val)
        if(root.right) traversalBST(root.right, arr)
    }
    
    traversalBST(root, arr)
    
    return arr[k-1]
};