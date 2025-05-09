/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max=0
    let l = 0
    let r = height.length-1

    while(l<r){
        let area = Math.min(height[r],height[l])*(r-l)
        max = Math.max(max, area)

        if(height[r]>height[l]){
            l++
        }else{
            r--
        }
    }

    return max
};