//map method
const numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function print(number) {
  return number;
}

const printNum = numbers.map(print);
console.log(printNum);

const printNum2 = numbers.map((number) => {
  return number;
});
console.log(printNum2);
