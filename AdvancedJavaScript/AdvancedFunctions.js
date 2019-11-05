// Closures - a function ran. the function executed. it's never going to execute again
// But it's going to remember that there are references to those variables
// so the child scope always has access to the parent scope.
const first = () => {
  const greet = "hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();
newFunc();

// Currying
const multiply = (a, b) => a * b;
const curriedMultiply = a => b => a * b;
curriedMultiply(3)(4);
const multiplyBy5 = curriedMultiply(5);
multiplyBy5(11);

// Compose
const compose = (f, g) => a => f(g(a));
const sum = num => num + 1;
compose(
  sum,
  sum
)(5); // = 7

// Avoiding Side Effects, functional purity. It does not depend on any state, or data,
// change during a program’s execution. It must only depend on its input elements.

// Deterministic- always produces the same results given the same inputs
var a = 1;
function b() {
  a = 2; // this is a side effect.
}
