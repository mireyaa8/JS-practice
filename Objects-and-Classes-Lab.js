function objBasics() {
  let str = "name";
  let obj = {
    name: "Nasko",
    age: 24,
  };
  console.log(obj.name);
  console.log(obj["name"]);
  console.log(obj[str]);

  let obj1 = { name: "Peter", age: 20 };
  let person = {};
  person.name = "Peter";
  person["lastName"] = "Parker";
  person.age = 20;
  person.hairColor = "black";
}
let person = {
  sayHello: function () {
    console.log("Hi, guys");
  },
};
let keys = Object.keys(person);
console.log(keys);
for (const currentKey of keys) {
  console.log(`${currentKey} / ${person[currentKey]}`);
}

function personInfo(firstName, lastName, age) {
  let person = {};
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age;
  return person;
}

function cityInfo(city) {
  for (const key in city) {
    const element = city[key];
    console.log(`${key} -> ${element}`);
  }
}

function convertToObject(json) {
  let obj = JSON.parse(json);
  for (key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
  let text = JSON.parse(obj);
}
function object2() {
  let person12 = {
    name: "Alice",
    age: 30,
    city: "Sofia",
  };
  let text = JSON.stringify(person);
  console.log(text);
}

function convertToJSON(name, lastName, hairColor) {
  let person = {
    name,
    lastName,
    hairColor,
  };
  let personAsJsn = JSON.stringify(person);
  console.log(personAsJsn);
}

class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }
}

function catsInfo(catArray) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  let cats = [];
  for (let catData of catArray) {
    let [name, age] = catData.split(" ");
    let cat = new Cat(name, Number(age));
    cats.push(cat);
  }
  for (let cat of cats) {
    cat.meow();
  }
}

function songs(arr) {}
