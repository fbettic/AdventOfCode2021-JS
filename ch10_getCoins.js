// ---------- Challenge 10 ----------

function getCoins(change) {
  const coins = [1, 2, 5, 10, 20, 50];
  let toGive = [0, 0, 0, 0, 0, 0];

  while (change > 0) {
    for (let i = coins.length - 1; i > -1; i--) {
      if (coins[i] <= change) {
        change -= coins[i];
        toGive[i] += 1;
        break;
      }
    }
  }

  return toGive;
}

// ---------- Challenge 10 ----------

console.log(getCoins(56));
