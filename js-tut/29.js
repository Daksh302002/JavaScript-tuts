//how to clone the array;

// let arr1 = ["hello", "world", "i", "am", "copying"];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// let arr1=["item1","item2"];
// let arr2=["item1","item2"];
// arr1.push("item321")
// console.log(arr1);
// console.log(arr2);

// let arr1 = ["item1", "item2"];
// let arr2=arr1.slice(0).concat(["item 3 ,item 4"]);
// let arr2 = [].concat(arr1,["item 3 ,item 4"]);

//new way to make a clone
// let arr2=[...arr1,"item 3",30]
// arr1.push(1);
// console.log(arr1 === arr2);
// console.log(arr1);
// console.log(arr2);

let arr1 = ["item1", "item2"];
let arr2 = ["item3", "item4"];
let arr3 = ["item5", "item6"];
let arr123 = [...arr1, ...arr2, ...arr3];
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr123);
