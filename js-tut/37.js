//how to iterate object

let person = {
  name: "daksh",
  age: 21,
  hobbies: ["guitar", "cricket", "dancing"],
};

//for in loop
//object.keys

for (let key in person) {
  console.log(`${key} : ${person[key]}`);
}
