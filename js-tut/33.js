//for of loop in array;

let fruitsAndVegitable = [
  "Apple",
  "Banana",
  "Orange",
  "Strawberry",
  "Blueberry",
  "Watermelon",
  "Pineapple",
  "Mango",
  "Kiwi",
  "Grape",
  "Peach",
  "Pear",
  "Cherry",
  "Raspberry",
  "Blackberry",
  "Plum",
  "Apricot",
  "Lemon",
  "Lime",
  "Papaya",
  "Cranberry",
  "Avocado",
  "Coconut",
  "Fig",
  "Guava",
  "Carrot",
  "Potato",
  "Tomato",
  "Onion",
  "Garlic",
  "Broccoli",
  "Spinach",
  "Lettuce",
  "Cucumber",
  "Bell pepper",
  "Green bean",
  "Cauliflower",
  "Kale",
  "Brussels sprout",
  "Celery",
  "Asparagus",
  "Eggplant",
  "Zucchini",
  "Pumpkin",
  "Sweet potato",
  "Radish",
  "Beetroot",
  "Cabbage",
  "Artichoke",
  "Mushroom",
];

let fruitsAndVegitable2 = [];

for (let fAV of fruitsAndVegitable) {
  console.log(fAV);
}

for (let arrs of fruitsAndVegitable) {
  fruitsAndVegitable2.push(arrs.toUpperCase());
}
console.log(fruitsAndVegitable2);
