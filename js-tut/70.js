//methods

function personInfo() {
  // console.log(this);
  console.log(
    `person name is ${this.firstName} and the person age is ${this.age}`
  );
}
const person1 = {
  firstName: "mohit",
  age: 21,
  about: personInfo,
};

const person2 = {
  firstName: "harshit",
  age: 8,
  about: personInfo,
};

const person3 = {
  firstName: "nitish",
  age: 10,
  about: personInfo,
};

person1.about();
person2.about();
person3.about();
