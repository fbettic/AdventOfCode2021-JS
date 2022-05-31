function daysToXmas(date) {
  let xmas= new Date("Dec 25, 2021");
  let dateTrunk = new Date(date.toDateString())
  return (xmas - dateTrunk)/86400000
}

console.log(daysToXmas(new Date('Jan 1, 2022 23:59:59')));