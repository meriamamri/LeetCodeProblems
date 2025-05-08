/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b)
    let smallestCloseTarget = Infinity

    for(let i=0; i<nums.length-2; i++){
        let start=i+1
        let end=nums.length-1
        while(start<end){
            let difference = target - (nums[i] + nums[start] + nums[end])
            if(difference===0){
                return target
            }else if(Math.abs(difference)<Math.abs(smallestCloseTarget) || Math.abs(difference)===Math.abs(smallestCloseTarget) && difference > smallestCloseTarget){
                smallestCloseTarget = difference
            }else if(difference>0){
                start++
            }else{
                end--
            }
        }
    }

    return target-smallestCloseTarget
}
