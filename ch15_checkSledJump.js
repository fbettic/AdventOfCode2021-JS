function checkSledJump(heights) {
  
  if(heights.length > 5 || heights.length < 2){
    return false;
  }

  let center = 0;

  if(heights.length%2!==0){
    center = (heights.length-1)/2;
  }else{
    center = (heights.length/2)-1;
  }
  

  for(let i=1; i<heights.length; i++){
    if(i<=center){
      if(heights[i-1]>=heights[i]){
        return false;
      }
    }else{
      if(heights[i]>=heights[i-1]){
        return false;
      }
    }
  }

  return true
}



console.log(checkSledJump([0,0]));
/*
checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!
*/