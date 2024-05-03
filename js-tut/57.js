//filter method

const numbers = [1, 3, 2, 6, 4, 8];

const isEven = (number) => {
  return number % 2 == 0;
};
const isOdd = (number) => {
  return number % 2 != 0;
};

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

const oddNumber = numbers.filter(isOdd);
console.log(oddNumber);
