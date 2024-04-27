//nested destructuring

const users = [
  {
    userId: 1,
    name: "user1",
    email: "user1@gmail.com",
    gender: "Male",
  },

  {
    userId: 2,
    name: "user2",
    email: "user2@gmail.com",
    gender: "Male",
  },
  {
    userId: 3,
    name: "user3",
    email: "user3@gmail.com",
    gender: "Male",
  },
  {
    userId: 4,
    name: "user4",
    email: "user4@gmail.com",
    gender: "Female",
  },
  {
    userId: 5,
    name: "user5",
    email: "user5@gmail.com",
    gender: "Female",
  },
];

// const [user1, user2, user3, user4, user5] = users;

// console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
// console.log(user5);

const [{ userId }, , { email }, , { gender }] = users;
console.log(userId);
console.log(email);
console.log(gender);
