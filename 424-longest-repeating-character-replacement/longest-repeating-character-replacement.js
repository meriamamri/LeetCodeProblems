/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let start =0
    let counter = 0
    let repeatedMap = new Map()
    let max = 0
    for(let i=0; i<s.length; i++){
        if(repeatedMap.has(s[i])){
            repeatedMap.set(s[i], repeatedMap.get(s[i])+1)
        }else{
            repeatedMap.set(s[i], 1)
        }

        counter=Math.max(counter, repeatedMap.get(s[i]))

        if(i-start+1-counter>k){
            repeatedMap.set(s[start], repeatedMap.get(s[start])-1)
            start++
        }

        max = Math.max(max, i-start+1)

    }

    return max
};