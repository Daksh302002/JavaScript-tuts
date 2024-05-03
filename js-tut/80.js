function myfunc() {
  console.log("Hello World");
}

//javascript function ---> object+function

console.log(myfunc.name);

//you can add your own property

// myfunc.myOwnProperty = "very unique value";
// console.log(myfunc.myOwnProperty);

// console.log(myfunc.prototype);

//only function provides prototype......

// if (myfunc.prototype) {
//   console.log("prototype is present");
// } else {
//   console.log("prototype is not present");
// }

myfunc.prototype.abc = "abc";
myfunc.prototype.age = 21;
myfunc.prototype.sing = function sing() {
  return "lalalalall";
};

console.log(myfunc.prototype);
console.log(myfunc.prototype.sing());
