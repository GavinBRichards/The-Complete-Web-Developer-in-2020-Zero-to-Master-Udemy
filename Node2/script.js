const fs = require("fs");

fs.readFile("./hello.txt", (err, data) => {
  if (err) {
    console.log("error");
  }
  console.log("Async", data.toString()); //utf8 is standard
});

const file = fs.readFileSync("./hello.txt");
console.log("Sync", file.toString());

// APPEND
// fs.appendFile("./hello.txt", " This is so cool!", err => {
//   if (err) {
//     console.log(err);
//   }
// });

// WRITE
// fs.writeFile("bye.txt", "sad to see you go", err => {
//   if (err) {
//     console.log(err);
//   }
// });

// DELETE
// fs.unlink("./bye.txt", err => {
//   if (err) {
//     console.log(err);
//   }
// });
