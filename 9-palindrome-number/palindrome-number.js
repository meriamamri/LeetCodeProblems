/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringValue = x.toString()
    let i=0
    let j=stringValue.length-1
    while(i<j){
        if(stringValue[i]===stringValue[j]){
            i++;
            j--;
        }
        else{
            return false;
        }
    }
    return true;
};