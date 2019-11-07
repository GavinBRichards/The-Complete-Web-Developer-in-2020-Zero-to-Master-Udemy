const express = require("express");

const app = express();

app.use(express.static(__dirname + "/public"));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.get("/", (req, res) => {
//     // req.query
//     // req.body
//     // req.header
//     // req.params
//   res.send("getting root");
// });

app.listen(3000);
