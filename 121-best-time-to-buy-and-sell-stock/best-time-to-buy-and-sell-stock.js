/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let start = 0
    for(let end=0; end<prices.length; end++){
        let profit = prices[end]-prices[start]
        if(profit<0){
            start=end
        }
        else{
            max = Math.max(max, profit)
        } 
    }

    return max
};