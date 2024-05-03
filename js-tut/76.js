//function(that function create object)
// 2. add key value pair
// 3. return that object

const createUser = (firstName, lastName, email, age, address) => {
  //   const user = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: email,
  //     age: age,
  //     address: address,
  //     about() {
  //       return `${this.firstName} is ${this.age} year old.`;
  //     },
  //     is18() {
  //       return this.age >= 18;
  //     },
  //   };

  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} year old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
};

const user1 = createUser(
  "harshit",
  "vashitha",
  "harshivashitha@gmail.com",
  18,
  "Home,colony,state,city"
);

console.log(user1);

const aboutUser1 = user1.about();
console.log(aboutUser1);

const is18 = user1.is18();
console.log(is18);
