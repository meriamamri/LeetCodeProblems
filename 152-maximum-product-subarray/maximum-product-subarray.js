/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prefixProducts = []
    prefixProducts.push(nums[0])
    let n=nums.length

    for(let i=1; i<n; i++){
        prefixProducts[i] = (prefixProducts[i-1]||1)*nums[i]
    }

    let maxPreffix = Math.max(...prefixProducts)

    let suffixProducts = []
    suffixProducts[n-1] = nums[n-1]

    for(let i=n-2; i>=0; i--){
        suffixProducts[i] = (suffixProducts[i+1]||1)*nums[i]
    }

    let maxSuffix = Math.max(...suffixProducts)

    return Math.max(maxSuffix,maxPreffix)    
};