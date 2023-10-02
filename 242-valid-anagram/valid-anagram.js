/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const charCount = new Array(26).fill(0); // Assuming only lowercase English letters

    for (let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charCount[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    for (let count of charCount) {
        if (count !== 0) {
            return false;
        }
    }

    return true;
}

/*var isAnagram = function(s, t) {
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
}*/