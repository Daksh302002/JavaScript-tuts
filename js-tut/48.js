//lexical scope
const myvar = "Value123";

function myApp() {
  //   const myvar = "Value1";
  function myfunc() {
    // const myvar = "Value432";
    console.log("inside my func1", myvar);
  }
  console.log(myvar);
  myfunc();
}

myApp();
