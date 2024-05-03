// reduce method

const numbers = [1, 2, 3, 4, 5, 6, 7];

const total = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);

console.log(total);

//accumulator,currentValue,return
// 1           2             3
// 3           3             6
// 6           4             10
//10           5             15
//15           6             21
//21           7             28

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalCart = userCart.reduce((totalPrice, currentProductPrice) => {
  return totalPrice + currentProductPrice.price;
}, 0);
console.log(totalCart);

//totalPrice,currentProductPrice.price,   return
// 0              12000                   12000
// 12000          22000                   34000
// 34000          15000                   49000
