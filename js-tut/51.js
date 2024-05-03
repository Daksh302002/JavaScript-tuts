//Rest Parameter....

// function myFunc(a, b, ...c) {
//   console.log(`a is:${a} b is:${b} c is:${c}`);
//   console.log(c);
// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);

function addAll(...number) {
  let total = 0;
  for (let i = 0; i < number.length; i++) {
    total += number[i];
  }
  return total;
}

console.log("The sum of all the numeber is", addAll(1, 2, 3, 4, 5, 6, 7));
