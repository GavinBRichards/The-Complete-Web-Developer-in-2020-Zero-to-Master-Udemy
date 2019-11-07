// import largeNumber from "script2.js"; - doesn't work in node
const script2 = require("./script2.js");

const a = script2.largeNumber;
const b = 5;
console.log(a + b);
