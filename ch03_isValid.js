// ---------- Challenge 03 ----------

function isValid(letter) {
  let newLetter = letter.replace(/ /g, "");

  if (newLetter.includes("()")) {
    return false;
  }

  let charArray = newLetter.split("");
  let isValidLetter = true;
  let parenthesis = 0;

  charArray.map((c) => {
    switch (c) {
      case "(":
        parenthesis += 1;
        break;
      case ")":
        if (parenthesis > 0) {
          parenthesis -= 1;
        } else {
          isValidLetter = false;
        }
        break;
      case "{":
        isValidLetter = false;
        break;
      case "[":
        isValidLetter = false;
        break;
    }
  });

  if (parenthesis !== 0) {
    isValidLetter = false;
  }

  return isValidLetter;
}

// ---------- Challenge 03 ----------

/*
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
*/

const letter = "(muñeca() consola bici";

console.log(isValid(letter));
