//maps
// map is an iterable
//store data in ordered fashion
//store key value pair(like objects)
//duplicate keys are not allowed like objects

//Object literal
//key-->string
//key-->symbol
// const person = {
//   name: "harshit",
//   age: 7,
//   1:"one"
// };
// console.log(person.name);
// console.log(person["name"]);

// for(let key in person){
//     console.log(typeof key);
// }

const person = new Map();
// console.log(person);

person.set("firstname", "harshit");
person.set("age", 21);
person.set(1, "one");
person.set(1, "one");
// person.set([1, 2, 3], "oneTwoThree");
// person.set({ 1: "one" }, "oj");
// console.log(person);

// console.log(person.get("firstname"));
// console.log(person.get("age"));
// console.log(person.get(1));
// console.log(person.keys());
// console.log(person.values());

// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

// for(let key of person){
//     console.log(key);
// }

// for(let key of person){
//     console.log(Array.isArray(key));
// }

// for(let [key,value] of person){
//     console.log(key,value);
// }

const person1 = {
  id: 1,
  name: "harshit",
};
const person2 = {
  id: 2,
  name: "harsh",
};

const extraInfo = new Map();
extraInfo.set(person1, { age: 21, gender: "Male" });
extraInfo.set(person2, { age: 20, gender: "Male" });

// console.log(extraInfo);
console.log(person1);
console.log(extraInfo.get(person1));
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(person2);
console.log(extraInfo.get(person2));
console.log(extraInfo.get(person2).age);
console.log(extraInfo.get(person2).gender);
