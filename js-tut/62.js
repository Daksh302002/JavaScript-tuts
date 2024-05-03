//some method
//koi aisa ek number  hai jo even hai...

// const number = [3, 5, 8, 9];

// const ans = number.some((number) => number % 2 == 0);
// console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "tv", price: 15000 },
  { productId: 3, productName: "ac", price: 22000 },
  { productId: 4, productName: "iphone-15 pro max", price: 200000 },
];

const ans = userCart.some((cartItem) => cartItem.price > 100000);
console.log(ans);
