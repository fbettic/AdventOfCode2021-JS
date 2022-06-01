// ---------- Challenge 08 ----------

function maxProfit(prices) {
  let bestProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];

      if (profit > bestProfit) {
        bestProfit = profit;
      }
    }
  }

  return bestProfit > 0 ? bestProfit : -1;
}

// ---------- Challenge 08 ----------

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
const pricesEth = [10, 20, 30, 40, 50, 60, 70];
const pricesDoge = [18, 15, 12, 11, 9, 7];
const pricesAda = [3, 3, 3, 3, 3];

console.log(maxProfit(pricesAda));
