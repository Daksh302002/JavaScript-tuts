//function(that function create object)
// 2. add key value pair
// 3. return that object
//new keyword

function CreateUser(firstName, lastName, email, age, address) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}

// console.log(CreateUser.prototype);

CreateUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} year old.`;
};
CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};
CreateUser.prototype.sing = function () {
  return "toon na na na na la la la";
};

const user1 = new CreateUser(
  "harshit",
  "vashitha",
  "harshivashitha@gmail.com",
  18,
  "Home,colony,state,city"
);
const user2 = new CreateUser(
  "daksh",
  "gupta",
  "daksh30122002@gmail.com",
  21,
  "Home,colony,state,city"
);

// console.log(user1);
// console.log(user2);

console.log(user1.sing());
console.log(user2.sing());

console.log(user1.about());
console.log(user2.about());

console.log(user1.is18());
console.log(user2.is18());
