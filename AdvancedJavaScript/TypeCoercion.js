// Language converting type to type
// All languages have some form of type coercion

// try to always use ===

1 == "1"; //true - try to change the values to match - try to avoid, unpredictable
1 === "1"; //false - don't try to change values

if (1) {
  //converts 1 to true
  console.log(5);
}

-0 === +0; //true
Object.is(-0 === +0); //false
