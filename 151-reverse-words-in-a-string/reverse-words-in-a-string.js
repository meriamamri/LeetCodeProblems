/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let arr =s.trim().replace(/  +/g, ' ').split(' ');
    let low = 0
    let hight = arr.length
    while(low<hight){
        let val = arr[low]
        arr[low]= arr[hight]
        arr[hight]=val
        low++
        hight--
    }
    return arr.join(" ").trim()
}

