//array destructuring

let arr = ["item1", "item2", "item3", "item4"];
// let arr1 = arr[0];
// let arr2 = arr[1];
// console.log(arr);
// console.log(arr1);
// console.log(arr2);

// let [arr1, arr2,arr3,arr4] = arr;

// console.log(arr);
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

let [arr1,arr2,...myarr] = arr;
console.log(arr1);
console.log(arr2);
console.log(myarr);
