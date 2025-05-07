/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left =0
    let max = 0
    for(let right=1; right<prices.length; right++){
        let profit = prices[right]-prices[left]
        if(profit<0) left=right
        else max = Math.max(max, profit)
    }

    return max
};