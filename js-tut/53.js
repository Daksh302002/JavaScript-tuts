//call back function

function myFunc2(name,age) {
  console.log("Inside my func2");
  console.log(`your name is ${name}.. and age is ${age}`);
}

function myFunc(callback) {
  console.log("Hello World");
  callback("daksh",21);
}

myFunc(myFunc2);
