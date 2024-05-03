//getter and setters

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName() {
    // GETTERS
    return `My full name is ${this.firstName} ${this.lastName}`;
  }
  setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set fullName(fullName) {
    //SETTER
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new Person("Harshit", "Sharma", 19);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName);
// console.log(person1.firstName);
// console.log(person1.lastName);

// person1.setName("Daksh", "Gupta");
// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "mohit vashistha";
console.log(person1);
