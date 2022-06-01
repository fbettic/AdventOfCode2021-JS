// ---------- Challenge 06 ----------

function sumPairs(numbers, result) {
  let pair = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === result && pair.length < 2) {
        pair.push(numbers[i]);
        pair.push(numbers[j]);
      }
    }
  }

  if (pair.length === 0) {
    return null;
  }
  return pair;
}

// ---------- Challenge 06 ----------

console.log(sumPairs([2, 2, 3, 1], 4));
