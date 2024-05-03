// clas keyword

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    console.log("constructor called!");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about() {
    return `${this.firstName} is ${this.age} year old.`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "toon na na na na la la la";
  }
}

const user1 = new CreateUser(
  "harshit",
  "vashitha",
  "harshivashitha@gmail.com",
  18,
  "Home,colony,state,city"
);
const user2 = new CreateUser(
  "Daksh",
  "Gupta",
  "daksh30122002@gmail.com",
  21,
  "Home,colony,state,city"
);

// console.log(user1);
// console.log(user2);
console.log(user1.firstName);
console.log(user1.about());
