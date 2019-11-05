//
// flat
//
const array = [1, 2, [3, 4, [5]]];
array.flat();
array.flat(2);
array.flat(50);

const entries = ["bob", "sally", , , , , , , , "cindy"];
entries.flat();

//
// flatMap
//
const arrayChaos = array.flatMap(creature => creature + "chaos");

//
// trim
//
userEmail = "               eddytheeagle@gmail.com";
userEmail2 = "jonnydangerous@gmail.com            ";
userEmail.trimStart(); // "eddytheeagle@gmail.com"
userEmail2.trimEnd(); // jonnydangerous@gmail.com

//
// fromEntries
//
userProfiles = [["commanderTom", 23], ["derekZlander", 40], ["hansel", 18]];
Object.fromEntries(userProfiles);

const obj = Object.fromEntries(userProfiles);
Object.entries(obj);

// try, catch, block
try {
  true + "hi";
} catch {
  console.log("you messed up");
}
