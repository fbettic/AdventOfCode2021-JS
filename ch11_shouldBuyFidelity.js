// ---------- Challenge 11 ----------

function shouldBuyFidelity(times) {
  const ticket = 12.0;
  const card = 250.0;
  const cardDiscount = 0.75;

  let totalTicket = ticket * times;
  let totalCard = card;

  for (let i = 1; i < times + 1; i++) {
    totalCard += ticket * Math.pow(cardDiscount, i);
  }

  console.log(totalTicket);
  console.log(totalCard);

  return totalCard < totalTicket;
}

// ---------- Challenge 11 ----------

console.log(shouldBuyFidelity(3));
