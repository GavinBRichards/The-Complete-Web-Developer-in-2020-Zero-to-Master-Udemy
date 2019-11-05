const array = [1, 2, 10, 16];
const double = [];
const newArray = array.forEach(num => {
  double.push(num * 2);
});
console.log("forEach", double);

// Map ---------------------------------------------
const mapArray = array.map(num => num * 2);
console.log("map", mapArray);

// Filter---------------------------------------------
// const filterArray = array.filter(num => {
//   return num > 5;
// });
const filterArray = array.filter(num => num > 5); //short form
console.log("filter", filterArray);

// Reduce ---------------------------------------------
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 5);
console.log("Reduce", reduceArray);
