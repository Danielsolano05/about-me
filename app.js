'use strict';
let userName = prompt("What is your name?");
if (userName) {
  alert("Hello, " + userName + "!");
} else {
  alert("Hello, guest!");
}

let userResponse = confirm('Do you want to proceed?');
if (userResponse) {
    alert('User selected Yes.');
} else {
    alert('User selected No.');
}
let userChoose =confirm('was I born in 2005')
if (userChoose) {
    alert('user chose yes.');
}else {
  alert('user chose no.');
}
let pasion = prompt ('what is one of my pasions' );
{
  switch (pasion.toLowerCase()) {
     case 'baking':
     alert('my favorit pasion is baking');
      break;
      case 'cooking':
        alert('my favorit pasiom is cooking');
        break
        default:
          alert('you don\'t know what my favorit pasion is');
  }
}
let birth =prompt ('was I born in Oregon');
{
switch (birth.toLocaleLowerCase) {
  case 'yes I was':
    alert('you are Wrong')
    break;
    case 'no ':
      alert('corrrect I was infact not born in Oregon')
  default:
  alert('I was not born in Oregon')
}


}
const guessingNumber = 19;
let guess =6;
while (guess !== guessingNumber) {
    // Prompt the user to enter a guess and convert it to an integer
    guess = parseInt(prompt("Guess the number:"), 10);

    
    if (guess === guessingNumber) {
        alert('Correct! You have guessed the correct number.');
        break; // Exit the loop if the guess is correct
    } else if (guess > guessingNumber) {
        alert('Too high, try again.');
    } else if (guess < guessingNumber) {
        alert('Too low, try again.');
    } else {
        alert('Please enter a valid number.');
    }
}
let answer = prompt('is daniel favorit activity sleeping.').toLowerCase();
console.log(answer)

let activities = ['sleeping', 'baking', 'cooking', 'watching TV'];
console.log(activities); // Output: ['sleeping', 'baking', 'cooking', 'watching TV']
