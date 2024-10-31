'use strict';
let userpoints =0;
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
let birth = prompt('Was I born in Oregon?'); 

switch (birth.toLocaleLowerCase()) {
  case 'yes':
    alert('You are wrong');
    break;
  case 'no':
    alert('Correct! I was not born in Oregon');
    break;
  default:
    alert('I was not born in Oregon');
    break;
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
// Array of valid activities
let activities = ['sleeping', 'baking', 'cooking', 'watching TV'];

// Prompt the user for their answer
let answer = prompt('What is Daniel\'s favorite activity?').toLowerCase();
console.log(answer);

// Check if the answer is one of the correct activities
if (activities.includes(answer)) {
   
  alert('Correct! That is one of Daniel\'s favorite activities.');
} else {
   alert('Incorrect. Please choose one of the following: sleeping, baking, cooking, watching TV.');
}

// Display all valid activities
console.log('Daniel\'s favorite activities are:');
for (let i = 0; i < activities.length; i++) {
    console.log(activities[i]);
}

