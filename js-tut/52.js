// param destructuring

const person = {
  FirstName: "harshit",
  gender: "male",
  age: 21,
};

// function printDetails(obj) {
//   console.log(obj.FirstName);
//   console.log(obj.gender);
//   console.log(obj.age);
// }
function printDetails({ FirstName, gender, age }) {
  console.log(FirstName);
  console.log(gender);
  console.log(age);
}

printDetails(person);
