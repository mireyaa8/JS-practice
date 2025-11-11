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

function songs(arr) {
  class Song {
    constructor(type, name, time) {
      this.type = type;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = arr.shift();
  let typeSong = arr.pop();
  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = arr[i].split("_");
    let song = new Song(type, name, time);
    songs.push(song);
  }
  if (typeSong === "all") {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === typeSong);
    filtered.forEach((i) => console.log(i.name));
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);

function employees(namesArray) {
  let obj = {};
  for (let i = 0; i < namesArray.length; i++) {
    obj[`name${i}`] = namesArray[i];
    let currName = obj[`name${i}`];
    let currNameLength = currName.length;
    console.log(`Name: ${currName} -- Personal Number: ${currNameLength}`);
  }

}
employees([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
