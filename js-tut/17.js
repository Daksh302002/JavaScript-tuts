//nested if else

let comp_Num = 20;
let guess_user_num = Number(prompt("Guess a number"));

// console.log(typeof guess_user_num);

if (comp_Num == guess_user_num) {
  console.log("Congratulations! Your guess is correct");
} else {
  if (comp_Num < guess_user_num) {
    console.log("Your guess is too high.....");
  } else {
    console.log("Your guess is too low.....");
  }
}
