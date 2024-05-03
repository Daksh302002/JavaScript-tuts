//every method

// const number = [2, 4, 6, 8, 100];

// const ans = number.every((number) => number % 2 == 0);

// console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const priceless = userCart.every((user) => {
  return user.price < 30000;
});

console.log(priceless);
