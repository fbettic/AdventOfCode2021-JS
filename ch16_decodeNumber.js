function decodeNumber(symbols) {
  const symbolsTable = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100
  };

  if(symbols.length<2){
    return symbolsTable[symbols[0]];
  }

  let number = 0;
  for(let i=0; i<symbols.length-1; i++){
    if(symbolsTable.hasOwnProperty(symbols[i])){
      if(symbolsTable[symbols[i]]<symbolsTable[symbols[i+1]]){
        number-=symbolsTable[symbols[i]];
      }else{
        number+=symbolsTable[symbols[i]];
      }
    }
  }

  number+=symbolsTable[symbols[symbols.length-1]];


  return number
}

console.log(decodeNumber(";.W"));



/*

 Símbolo       Valor
 .             1
 ,             5
 :             10
 ;             50
 !             100

 decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
*/
