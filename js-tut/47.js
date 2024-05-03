//function inside function

const app = () => {
  const myFunc = () => {
    console.log("Hello from my function");
  };
  const TwoSum = (a, b) => {
    return a + b;
  };
  myFunc();
  console.log(TwoSum(5, 5));
  console.log("Inside app");
};

app();
