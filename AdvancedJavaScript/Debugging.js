//
const flattenedOriginal = [[0, 1], [2, 3], [4, 5]].reduce(
  (a, b) => a.concat(b),
  []
);

const flattened1 = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
  debugger;
  return [].concat([0, 1]);
}, []);

const flattened2 = [[0, 1], [2, 3], [4, 5]].reduce((accumulator, array) => {
  debugger;
  return accumulator.concat(array);
}, []);
