//object inside array;
//very usful in real application

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

for (let user of users) {
  console.log(user);
}

// for(let index in users){
//     console.log(users[index]);
// }
