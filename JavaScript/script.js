console.log("Argument");

//

function sayHello() {
  console.log("Hello");
}

sayHello();

//

var sayBye = function() {
  console.log("Bye");
};

sayBye();

function sing(song) {
  console.log(song);
}

sing("Laa Dee Daa");
sing("hellloo");

//

function multiply(a, b) {
  if (a > 10 || b > 10) {
    return "that's too hard";
  } else {
    return a * b;
  }
}

// alert(multiply(5, 10));

//

var list = ["tiger", "cat", "bear", "bird"];
console.log(list[1]);
list.shift();
console.log(list);
list.pop();
console.log(list);
list.push("elephant");
console.log(list);
list.concat(["bee", "deer"]);
console.log(list);
list.sort();
console.log(list);
var list = [
  ["tiger", "cat", "bear", "bird"],
  ["dog", "sheep"],
  ["turtle", "snake"]
];
console.log(list[0][2]);

var functionList = [
  function apple() {
    console.log("apple");
  }
];

var user = {
  name: "John",
  age: 34,
  hobby: "Soccer",
  isMarried: false,
  spells: ["abrakadabra", "shazam", "boo"],
  shout: function() {
    console.log("FUS RO DAH!!");
  }
};
console.log(user.name, user.age);
user.favoriteFood = "spinache";
user.spells[1];
console.log(user);

var emptyObj = {};
var nullObj = null;
// nullObj.name = "andy"; //wont work
emptyObj.name = "andy"; //will work

var login = [
  {
    username: "andy",
    password: "secre"
  },
  {
    username: "jess",
    password: "123"
  }
];

console.log(login);

//
//
//

// function declaration
function newFunction() {}

// fucntion expression
var newFunction = function() {};

//  expression
1 + 3;
var a = 2;
return true;

// calling or invoking a function
alert();
newFunction(param1, param2);

// assign a variable
var a = true;

// fucntion vs method
function thisIsAFunction() {}

var obj = {
  thisIsAMethod: function() {}
};

thisIsAFunction();
obj.thisIsAMethod();
