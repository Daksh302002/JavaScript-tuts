//function(that function create object)
// 2. add key value pair
// 3. return that object

const userMethods = {
  about() {
    return `${this.firstName} is ${this.age} year old.`;
  },
  is18() {
    return this.age >= 18;
  },
  sing() {
    return "toon na na na na la la la";
  },
};

const createUser = (firstName, lastName, email, age, address) => {
  const user = Object.create(userMethods);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
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

console.log(user1);
console.log(user2);

console.log(user1.sing());

const aboutUser1 = user1.about();
console.log(aboutUser1);

const is18 = user1.is18();
console.log(is18);
