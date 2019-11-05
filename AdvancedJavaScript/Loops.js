const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
};

// for
for (let i = 0; i < basket.length; i++) {
  console.log("for", basket[i]);
}

// forEach
basket.forEach(item => {
  console.log("forEach", item);
});

// forOf
// Iterating iterables - arrays, strings
for (item of basket) {
  console.log("forOf", item);
}
for (item of "basket") {
  console.log("forOf", item);
}

// forIn -  loop over and see object properties
// Enumerating - Objects
for (item in detailedBasket) {
  console.log("forIn", item);
}
