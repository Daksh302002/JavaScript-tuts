//function(that function create object)
// 2. add key value pair
// 3. return that object

// const userMethods = {
//   about() {
//     return `${this.firstName} is ${this.age} year old.`;
//   },
//   is18() {
//     return this.age >= 18;
//   },
//   sing() {
//     return "toon na na na na la la la";
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}

// console.log(createUser.prototype);

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} year old.`;
};
createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  return "toon na na na na la la la";
};

const user1 = createUser(
  "harshit",
  "vashitha",
  "harshivashitha@gmail.com",
  18,
  "Home,colony,state,city"
);
const user2 = createUser(
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
