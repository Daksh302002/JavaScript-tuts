class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat(string) {
    return `${this.name},is eating ${string}`;
  }
  issuperCute() {
    return this.age <= 1;
  }

  iscute() {
    return true;
  }
}

const animal1 = new animal("tom", 2);
// console.log(animal1);
// console.log(animal1.eat("pedigree"));
// console.log(animal1.issuperCute());
// console.log(animal1.iscute());

//class dog

class dog extends animal {}
const dog1 = new dog("tommy", 1);

console.log(dog1);
console.log(dog1.eat("pedigree"));
console.log(dog1.issuperCute());
console.log(dog1.iscute());
