const user1 = {
  name: "harshit",
  age: 8,
  about: function () {
    console.log(this.name, this.age);
  },
};

//dont do this mistake
// user1.about();
const myfunc = user1.about.bind(user1);
myfunc();
