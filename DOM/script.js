// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//   console.log("CLICK!!");
// });

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
});
