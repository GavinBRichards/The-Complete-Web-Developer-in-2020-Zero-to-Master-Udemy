// String Padding

// .padStart()
// .padEnd()
"Turtle".padStart(10);
// "          Turtle"
"Turtle".padEnd(10);
// "Turtle          "

// Trailing Commas and functions parameters lists and calls
const fun = (a, b, c, d) => {
  console.log(a);
};
fun(1, 2, 3, 4);

//
// Object.values
// Object.entries

let obj = {
  username0: "Santa",
  username1: "Rudolf",
  username2: "Mr.Grinch"
};

Object.keys(obj).forEach((key, index) => {
  console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
  console.log(value);
});

Object.entries(obj).forEach(value => {
  console.log(value);
});

Object.entries(obj).map(value => {
  return value[1] + value[0].replace("username", "");
});

// Async Await
