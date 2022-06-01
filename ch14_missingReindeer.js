// ---------- Challenge 14 ----------

function missingReindeer(ids) {
  let idsSum = ids.reduce((a, b) => a + b, 0);
  let idlength = (ids.length * (ids.length + 1)) / 2;
  return idlength - idsSum;
}

// ---------- Challenge 14 ----------

console.log(missingReindeer([9, 8, 2, 3, 5, 6, 4, 7, 1]));
/*
missingReindeer([0, 2, 3]) // -> 1
missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
missingReindeer([3, 0, 1]) // -> 2
missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
missingReindeer([0])*/
