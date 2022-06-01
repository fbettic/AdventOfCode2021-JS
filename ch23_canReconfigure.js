// ---------- Challenge 23 ----------

function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  let newFrom = from.split("");

  let assigned = {};

  let isValid = true;

  newFrom.forEach((c, i) => {
    if (
      !assigned.hasOwnProperty(c) &&
      !Object.values(assigned).includes(to[i])
    ) {
      assigned[c] = to[i];
    } else if (
      (assigned.hasOwnProperty(c) && assigned[c] !== to[i]) ||
      (!assigned.hasOwnProperty(c) && Object.values(assigned).includes(to[i]))
    ) {
      isValid = false;
    }
  });

  return isValid;
}

// ---------- Challenge 23 ----------

const from = "BAL";
const to = "LIB";

console.log(canReconfigure(from, to)); // true
/* la transformación sería así:
B -> L
A -> I
L -> B
*/

const from1 = "CON";
const to1 = "JUU";

console.log(canReconfigure(from1, to1)); // false
/* no se puede hacer la transformación:
C -> J
O -> U
N -> FALLO
*/

const from2 = "XBOX";
const to2 = "XXBO";

console.log(canReconfigure(from2, to2)); // false
/* no se puede hacer la transformación:
X -> X
B -> X (FALLO, no mantiene el orden de transformación y la B no puede asignarse a la X que ya se asignó a otra) 
O -> B
X -> O (FALLO, la X no puede asignarse a la O que ya se asignó a la X)
*/

const from3 = "XBOX";
const to3 = "XOBX";

console.log(canReconfigure(from3, to3)); // true

const from4 = "MMM";
const to4 = "MID";
console.log(canReconfigure(from4, to4)); // false
/* no se puede hacer la transformación:
M -> M (BIEN, asigna el mismo carácter a si mismo)
M -> I (FALLO, asigna el mismo carácter a dos letras distintas)
M -> D (FALLO, asigna el mismo carácter a dos letras distintas)
*/

const from5 = "AA";
const to5 = "MID";
console.log(canReconfigure(from5, to5)); // false -> no tiene la misma longitud
