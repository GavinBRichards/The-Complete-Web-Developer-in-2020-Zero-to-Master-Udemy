// Primitive Type - Pass by Value
var a = 5;
var b = a;
b++;
console.log(a);
console.log(b);

// Object Type - Pass by Reference -
// by having one object we are saving space in memory
let obj1 = { name: "Yao", password: "123" };
console.log("obj1", obj1);
let obj2 = obj1;
console.log("obj2", obj2);
obj2.password = "easypeasy";
console.log("obj1", obj1);
console.log("obj2", obj2);

var c = [1, 2, 3, 4, 5];
var d = [].concat(c);
d.push(1231241);
console.log(d);
console.log(c);

let obj = {
  a: "a",
  b: "b",
  c: { deep: "try and copy me" }
};
let clone = Object.assign({}, obj);
let clone2 = { ...obj }; // Spread operator
let superClone = JSON.parse(JSON.stringify(obj)); // Can have performance implications. Try to avoid

obj.c = 5;
obj.c.deep = "hahaha";
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);
