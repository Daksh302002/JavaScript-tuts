//set (iterable)
//store data
//sets also have its own methods
//no-index based access
//unique item

const numbers = new Set([1, 2, 3, 4, 5, 6]);

// console.log(typeof numbers);
// console.log(numbers);

// if(numbers.has(13)){
//     console.log("yes the one is present");
// }else{
//     console.log("no");
// }

// for (const char of numbers) {
//   console.log(char);
// }

const myArr = [1, 1, 2, 2, 3, 4, 5, 6, 3, 4, 5];
console.log(myArr);
const uniqueElements = new Set(myArr);
console.log(uniqueElements);

let length = 0;
for (let ele of uniqueElements) length++;
console.log(length);
