// ---------- Challenge 13 ----------

function wrapGifts(gifts) {
  let box = ["*" + "*".repeat(gifts[0].length) + "*"];

  gifts.map((gift) => {
    box.push("*" + gift + "*");
  });

  box.push(box[0]);
  return box;
}

// ---------- Challenge 13 ----------

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));

console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
