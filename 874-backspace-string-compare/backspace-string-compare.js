/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    const buildNewString = (str) =>{
        let result = []
        for(let char of str) {
            if(char ==="#"){
                result.pop()
            }else{
                result.push(char)
            }
        }
        return result.join("")
    }

    return buildNewString(s)===buildNewString(t)
    
}