// JavaScript is a single threaded language that can be non blocking

// allocate memory
const a = 1;

// Memory Leak - by having unused memory it fills the memory heap

// call stack - reads and executes script
console.log(1); //runs first
setTimeout(() => {
  console.log(2); //runs second
}, 2000);
console.log(3); //runs third

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// Synchronos programming - once one event is finished the next can start - one call stack item at a time

// RECURSION - Keeps adding to call stack causing a stack overflow
function foo() {
  foo();
}
foo();

// CALL STACK
// WEB API
// CALLBACK QUEUE
// EVENT LOOP
