/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[]
    for(let i=0; i<s.length; i++){
        if(s[i]=='(' ||  s[i]=='{' || s[i]=='['){
            stack.push(s[i])
        }else{
            let char = stack.pop()
            if(!char || (char === '(' && s[i] !== ')') || (char === '{' && s[i] !== '}') || (char === '[' && s[i] !== ']'))  return false
        }
    }
    return stack.length ===0
};