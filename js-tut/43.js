//functions

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 4);

// function sumThree() {
//   let a = Number(prompt("Enter first number"));
//   let b = Number(prompt("Enter second number"));
//   let c = Number(prompt("Enter third number"));
//   return a + b + c;
// }

// console.log("The sum is ", sumThree());

// function IsEven(a) {
//   if (a % 2 == 0) {
//     return true;
//   }
//   return false;
// }

// console.log(IsEven(2210));

// function firstChar(a) {
//   return a[0];
// }
// console.log(firstChar("Abc"));

function FindTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i;
  }
  return -1;
}

let arr = [1, 5, 9, 27, 6];
let target = 91;
console.log(FindTarget(arr, target));
