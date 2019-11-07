//                                          HTTP
//           REQUEST
// GET - Get from server
// POST - send data and add to server
// PUT - send data and update with new info
// DELETE - delete data on backend

//           RESPONSE
// STATUS CODE

//                                           JSON - JavaScript Object Notation
// syntax for storing and exchanging data
// JSON.parse() returns object
// JSON.stringify() returns JSON

//                                           AJAX
// read from a web server after page has loaded and update page without reloading

//                                           PROMISE
// an object that may produce a single value some time in the future
// Either a resolved value, or a reason that it's not resolved (rejected)
// three states - fulfilled, rejected, pending

// Callback method
movePlayer(100, "Left", function() {
  movePlayer(400, "Left", function() {
    movePlayer(10, "Right", function() {
      movePlayer(330, "Left", function() {});
    });
  });
});

// Promise method
movePlayer(100, "Left")
  .then(() => movePlayer(400, "Left"))
  .then(() => movePlayer(10, "Right"))
  .then(() => movePlayer(330, "Left"));

const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Worked");
  } else {
    reject("It broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "HIII");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "POOKIE");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "LOOKING FOR ME?");
});

Promise.all([promise, promise2, promise3, promise4]).then(values => {
  console.log(values);
});

promise
  .then(result => result + "!")
  .then(result2 => result2 + "?")
  .catch(() => console.log("error"))
  .then(result3 => result3 + "!!");

// ------------------------------------------------------------

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums"
];

Promise.all(
  urls.map(url => {
    return fetch(url).then(resp => resp.json());
  })
)
  .then(results => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));
