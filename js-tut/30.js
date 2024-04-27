//for loop in array...

let arr = [
  "item1",
  "item2",
  "item3",
  "item4",
  "item5",
  "item6",
  "item7",
  "item8",
];

let newarr = [];

for (let i = 0; i < arr.length; i++) {
  newarr.push(arr[i].toUpperCase());
}
console.log(newarr);
