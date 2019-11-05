// let should replace all var
// const should never change

const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
  let wizardLevel = true;
  console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// you can change properties of objects but not the variable
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
};

// Destructuring
const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;

// Object properties
const name = "john snow";
const a = "Simon";
const b = true;
const c = {};

const obj = {
  //   a: a,
  //   b: b,
  //   c: c
  a,
  b,
  c
  //   [name]: "hello",
  //   ["ray" + "smith"]: "hihi",
  //   [1 + 2]: "3"
};

// Template strings
const name = "Sally";
const age = 34;
const pet = "horse";

const gretting = "Hello " + name + " you seem to be doing " + greeting + "!";
const greetingBest = `Hello ${name} you seem to be ${age -
  10}. What a lovely ${pet} you have.`;

// Default Arguments
function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${age -
    10}. What a lovely ${pet} you have.`;
}

// Symbol - completely unique type - mostly used for object properties
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

// Arrow functions
// function add(a, b) {
//   return a + b;
// }

const add = (a, b) => a + b;
