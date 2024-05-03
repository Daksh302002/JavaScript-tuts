//super

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

class dog extends animal {
  constructor(name, age, speed) {
    super(name, age);
    this.speed = speed;
  }
  run() {
    return `${this.name} is running at ${this.speed}`;
  }
}

const dog1 = new dog("tommy", 1, 45);
// console.log(dog1);
console.log(dog1.run());
