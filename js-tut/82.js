// new keyword
// 1.empty objrect this={}
// 2.return this

function createUser(firstName, age) {
  this.firstName = firstName;
  this.age = age;
}
createUser.prototype.about = function () {
  console.log(this.firstName, this.age);
};

const user1 = new createUser("harshit", 6);
console.log(user1);
user1.about();
