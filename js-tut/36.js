//objects are reference type
//arrays are good but not sufficient
//for real world data
//objects store key value pair
//objets dont have index

//creating an object
let person = {
  name: "daksh",
  age: 22,
  gender: "Male",
  hobbies: ["guitar", "programming", "reading books", "Driving"],
};
// console.log(person);
person.hobbies.push("cricket")

//how to access data from object using dot
// console.log(person.name);
// console.log(person.age);
// console.log(person.gender);
// console.log(person.hobbies);

//how to access data from object using square bracket
console.log(person["name"]);
console.log(person["age"]);
console.log(person["gender"]);
console.log(person["hobbies"]);

