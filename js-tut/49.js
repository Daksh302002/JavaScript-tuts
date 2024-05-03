//block scope vs function scope..

//let and const are block scope...
//var is a function scope....

{
  let FirstName = "harshit";
  console.log(FirstName);
}
// console.log(FirstName); error dega kyuki let ek block scope hai

{
  let FirstName = "mohit";
  console.log(FirstName);
}
