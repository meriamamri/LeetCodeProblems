/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let sequenceMap = {}
    let start = 0
    let minLength = Infinity 
    let startChar = 0
    let count = 0
    
    for(let i=0; i<t.length; i++){
        let v =t[i]
        if(!(v in sequenceMap)){
            sequenceMap[v]=0
        }
        sequenceMap[v]++
        
    }
    
    for(let end=0; end<s.length; end++){
        const endChar = s[end]
        if(endChar in sequenceMap){
            sequenceMap[endChar]--
            if(sequenceMap[endChar]>=0){
                count=count+1
            }
        }

        while(count === t.length){
            if(minLength>end-start+1){
                minLength = end-start+1
                startChar=start
            }
            let startVal = s[start]
            start++

            if(startVal in sequenceMap){
                if(sequenceMap[startVal]===0){
                    count=count-1
                }
                sequenceMap[startVal]++ 
            }
        }
    }
    if(minLength > s.length) return ''
    return s.substring(startChar, startChar + minLength);
};