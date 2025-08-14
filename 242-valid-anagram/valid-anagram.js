/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false

    let countArr = new Array(26).fill(0)

    for(let i=0; i<s.length; i++){

        countArr[s.charCodeAt(i)-'a'.charCodeAt(0)]++
        countArr[t.charCodeAt(i)-'a'.charCodeAt(0)]--
    }

    for(count of countArr){
        if(count !==0) return false
    }

    return true
};