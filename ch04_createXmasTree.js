function createXmasTree(height) {
  let tree = "";

  for (let i = height; i > 0; i--) {
    let space = "_".repeat(height - i);
    tree = space + "*".repeat(i * 2 - 1) + space + "\n" + tree;
  }


  let space = "_".repeat(height - 1);
  tree = tree + space + "#" + space + "\n";
  tree = tree + space + "#" + space
  

  return tree;
}

console.log(createXmasTree(10));

/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

*/
