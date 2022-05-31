function canCarry(capacity, trip) {
  let tripQueue = [trip[0]];
  let packages = trip[0][0];

  for (let i = 1; i < trip.length; i++) {
    packages += trip[i][0];

    let temp = tripQueue.length;
    for (let j = 0; j < temp; j++) {
      if (trip[i][1] < tripQueue[j][2]) {
        tripQueue.push(trip[i]);
      } else {
        packages -= tripQueue[j][0];
        tripQueue.splice(j, 1);
        tripQueue.push(trip[i]);
      }

      if (packages > capacity) {
        return false;
      }
    }
  }

  return packages > capacity ? false : true;
}

console.log( canCarry(4, [[2, 5, 8],[3, 6, 10]])); // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!

console.log(canCarry(3, [[1, 1, 5],[2, 2, 10]])); // true
// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos

console.log(canCarry(3, [[2, 1, 5],[3, 5, 7]])); // true -> nunca supera el máximo de capacidad *

console.log(canCarry(4, [[2, 3, 8],[2, 5, 7]])); // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

console.log(canCarry(1, [[2, 3, 8]])); // false -> no podría ni con el primer viaje

console.log(canCarry(2, [[1, 2, 4],[2, 3, 8],])); // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
