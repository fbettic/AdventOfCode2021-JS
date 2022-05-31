const carta = "bici coche balón  _playstation bici coche peluche";

function listGifts(letter) {
  let gifts={};
  
  let listGifts = letter
    .toLowerCase()
    .split(" ")
    .filter((gift) => gift !== "" && gift[0] !== "_");

  listGifts.map(gift => {
    if(gift in gifts){
      gifts[gift] = gifts[gift] + 1;
    }else{
      gifts[gift] = 1;
    }
  });

  return JSON.stringify(gifts);
}

const regalos = listGifts(carta);

console.log(regalos);
