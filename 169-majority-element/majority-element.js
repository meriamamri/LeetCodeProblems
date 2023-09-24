/**
 * @param {number[]} nums
 * @return {number}
 */

var majorityElement = function(nums) {
    let frequency = {}
    let n = nums.length
    for(let num of nums){
        frequency[num] = (frequency[num] || 0)+1
        if(frequency[num]>n/2){
            return num
        }
    }
}
/*var majorityElement = function(nums) {
    let majMap = new Map()
    let n =nums.length
    for(let i=0; i<n; i++){
        let value = majMap.get(nums[i])
        if(value){
            majMap.set(nums[i], value+1)
        }else{
            majMap.set(nums[i], 1)
        }
    }

    let max=0
    let value=0
    for(let [k,v] of majMap){
        let appears= Math.floor(v>=n/2)
        if(appears>max){
            max = appears
            value = k
        }
    }

    return value

};*/