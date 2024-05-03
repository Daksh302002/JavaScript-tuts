//call,apply,bind method

function about(hobby, favMusician) {
  console.log(this.name, this.age, hobby, favMusician);
}

const user1 = {
  name: "harshit",
  age: 8,
};

const user2 = {
  name: "mohit",
  age: 9,
};

//about
// user1.about()
// about.call(user1, "guitar", "moazrt");
// about.call(user2, "guitar", "moazrt");

//apply
// about.apply(user1, ["guitar", "bach"]);
// about.apply(user2, ["dancing", "bach"]);

//bind
const func = about.bind(user1, "guitar", "bach");
func();
