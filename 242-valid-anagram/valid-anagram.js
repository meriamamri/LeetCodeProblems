/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let newS = s.split('').sort()
    let newT = t.split('').sort()
    let i=0
    let j=0
    while(i<newS.length && j<newT.length){
        if(newS[i]!==newT[j]){
            return false
        }
        i++
        j++
    }

    return i===s.length && j===t.length
}