// Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 === object2);
console.log(object1 === object3);
object1.value = 15;
console.log(object1);
console.log(object2);
console.log(object3);

// context vs scope - this refers to the object it's inside of
const object4 = {
  a: function() {
    console.log(this);
  }
};
console.log(object4);

// instantiation - copy an object and reuse the code
class Player {
  constructor(name, type) {
    console.log("player", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}
class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard", this);
  }
  play() {
    console.log(`WEEE I'm a ${this.type}`);
  }
}
const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Mage");
wizard1.play();
wizard2.introduce();
