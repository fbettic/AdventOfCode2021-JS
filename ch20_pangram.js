function pangram(letter) {
  let normalizeLetter = letter
    .normalize("NFD")
    .replace(/[ \u0300-\u0301]/g, "")
    .toLowerCase()
    .normalize("NFC").split("");

    console.log(normalizeLetter)
  let charList = [];

  const isValidChar = /[a-zñ]/;

  normalizeLetter.forEach((c) => {
    if (isValidChar.test(c) && !charList.includes(c)) {
      charList.push(c);
    }
  });

  return charList.length === 27 ? true : false;
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
