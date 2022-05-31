function countPackages(carriers, carrierID) {
  
  let carrierList=[];
  let totalPackages=0;
  carriers.forEach(c => {
    if(c[0] === carrierID){
      carrierList=carrierList.concat(c[2]);
      totalPackages+=c[1];
    }else if(carrierList.includes(c[0])){
      carrierList=carrierList.concat(c[2]);
      totalPackages+=c[1];
    }
    
  });
  
  
  return totalPackages;
}



const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

console.log(countPackages(carriers, 'dapelu')) // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

console.log(countPackages(carriers2, 'camila')) // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15
