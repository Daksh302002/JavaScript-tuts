//iterables

const firstName = "harshit";
for (const char of firstName) {
  console.log(char);
}
const array = ["item1", "item2", "item3"];
for (const char of array) {
  console.log(char);
}

// Object are not iterable

// const obj = { name: "hrashit", age: 21, gender: "male" };
// for (const char of obj) {
//   console.log(char);
// }

//object like array

let name = "harshit";
console.log(name.length);
console.log(name[0]);
