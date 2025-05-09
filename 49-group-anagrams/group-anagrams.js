/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let strsMap = new Map()
    let result = []

    for(let i=0; i<strs.length; i++){
        let newStr = strs[i].split("").sort().join('')
        if(strsMap.has(newStr)){
            let arr = strsMap.get(newStr); 
            arr.push(strs[i]);             
            strsMap.set(newStr, arr);
        }else{
            strsMap.set(newStr, [strs[i]])
        }
    }

    for(let [key, value] of strsMap){
        result.push(value)
    }

    return result
};