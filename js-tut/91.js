//staic methods and properties
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  static classInfo() {
    return `This is a person class`;
  }
  static desc = "static property";
  get fullName() {
    return `My full name is ${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
  eat() {
    return `${this.firstName} is eating`;
  }

  superCute() {
    return this.age >= 1;
  }
  cute() {
    return true;
  }
}

const person1 = new Person("harshit", "vashitha", 12);
console.log(person1.eat());

// console.log(person1.classInfo()); // give an error
console.log(Person.classInfo());
console.log(Person.desc);
