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

alert(multiply(5, 10));

//
