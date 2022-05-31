function groupBy(collection, it) {

  let keys = [], entries = [];

  collection.forEach((item) => {
    let key;
    if (typeof it === "string") {
      key = item[it];
    } else if (typeof it === "function") {
      key = it(item);
    }

    if (keys.includes(key)) {
      entries[keys.findIndex(e=>e===key)].push(item);
    } else {
      keys.push(key);
      entries.push([item]);
    }
  });

  return Object.fromEntries(keys.map((key,index)=>{
    return [key, entries[index]];
  }));
}

console.log(groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating'));
//console.log("hello"["length"])
/*
groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
*/
