//find method

const myArray = ["hello", "cat", "Dog", "lion"];

// function islength(string) {
//   return string.length == 3;
// }

// console.log(myArray.find((string) => string.length == 3));

const users = [
  { userId: 1, username: "harshit" },
  { userId: 2, username: "harsh" },
  { userId: 3, username: "mohit" },
  { userId: 4, username: "nitish" },
  { userId: 5, username: "aaditya" },
];

const myUser = users.find((user) => {
  return user.userId == 2;
});

console.log(myUser);
