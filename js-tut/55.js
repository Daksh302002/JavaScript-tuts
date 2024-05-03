//important array methods

//ForEach
//map
//reduce
//filter

const numbers = [4, 2, 5, 8];

// function multipleBy2(number, index) {
//   console.log("index is", index);
//   console.log(`${number}*2 is ${number * 2}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   multipleBy2(numbers[i], i);
// }

// numbers.forEach(function (number, index) {
//   console.log("index is", index);
//   console.log(`${number}*2 is ${number * 2}`);
// });

const users = [
  { name: "daksh", age: 21 },
  { name: "paras", age: 20 },
  { name: "sagar", age: 23 },
  { name: "shukla", age: 24 },
];

users.forEach(({ name, age }) => {
  console.log(name, age);
});
