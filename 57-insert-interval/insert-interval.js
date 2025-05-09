/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let i=0
    let result = []

    while(i<intervals.length && intervals[i][1]<newInterval[0]){
        result.push(intervals[i])
        i++
    }


    while(i<intervals.length && intervals[i][0]<=newInterval[1]){
        newInterval[0]=Math.min(intervals[i][0],newInterval[0])
        newInterval[1]=Math.max(intervals[i][1],newInterval[1])
        i++
    }

    result.push(newInterval)

    while(i<intervals.length){
        result.push(intervals[i])
        i++
    }

    return result
};