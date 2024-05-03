//function returning function

// function myFunc() {
//   function myFunc2() {
//     console.log("Hello you are inside in my func2");
//   }
//   return myFunc2;
// }

// const ans = myFunc();
// ans();

// function myFunc() {
//   function myFunc2() {
//     return "Hello you are inside in my func2";
//   }
//   return myFunc2;
// }

// const ans = myFunc();
// console.log(ans());

function myfunc() {
  return function () {
    return "hello world";
  };
}
