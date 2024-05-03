// arrow function

const user = {
  name: "harshit",
  age: 8,
  about: () => {
    console.log(this.name, this.age);
  },
};

user.about(user);
