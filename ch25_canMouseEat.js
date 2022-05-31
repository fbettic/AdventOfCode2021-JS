function canMouseEat(direction, game) {
  const directions = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[0].length; j++) {
      if (game[i][j] === "m") {
        let move = [directions[direction][0] + i, directions[direction][1] + j];

        if (
          move[0] > -1 &&
          move[0] < game.length &&
          move[1] > -1 &&
          move[1] < game[i].length &&
          game[move[0]][move[1]] === "*"
        ) {
          return true;
        }
      }
    }
  }
  return false;
}

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

console.log(canMouseEat("up", room)); // false
console.log(canMouseEat("down", room)); // true
console.log(canMouseEat("right", room)); // false
console.log(canMouseEat("left", room)); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

console.log(canMouseEat("up", room2)); // false
console.log(canMouseEat("down", room2)); // false
console.log(canMouseEat("right", room2)); // true
console.log(canMouseEat("left", room2)); // false
