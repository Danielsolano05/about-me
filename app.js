 'use strict';
 let userPoints = 0;
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

 let userChoose =confirm('was I born in 2005');
 if (userChoose) {
    alert('user chose yes.');
     userPoints++;
 }else {
   alert('user chose no.');
 }

 let passion = prompt ('what is one of my pasions' );
 {
   switch (passion.toLowerCase()) {
      case 'baking':
      alert('my favorit passion is baking');
      userPoints++;
       break;
       case 'cooking':
         alert('my favorit passion is cooking');
         userPoints++;
         break;
         default:
           alert('you don\'t know what my favorit passion is');
   }
 }

 let birth = prompt('Was I born in Oregon?'); 
 switch (birth.toLocaleLowerCase()) {
   case 'yes':
     alert('You are wrong');
     break;
   case 'no':
     alert('Correct! I was not born in Oregon');
     userPoints++;
     break;
  default:
     alert('I was not born in Oregon');
     break;
 }

 const guessingNumber = 19; // The number to guess
 let guess; // Variable to hold the user's guess
 let attempts = 0; // Counter for the number of attempts
 const maxAttempts = 6; // Maximum number of attempts

 while (attempts < maxAttempts) {
//     // Prompt the user to enter a guess and convert it to an integer
    guess = parseInt(prompt("Guess the number:"), 10);
    
//     // Check if the guess is a valid number
     if (isNaN(guess)) {
         alert('Please enter a valid number.');
         continue; // Skip to the next iteration of the loop
     }

//     // Increment the attempts counter
     attempts++;

//     // Check if the guess is correct
     if (guess === guessingNumber) {
         alert('Correct! You have guessed the correct number.');
         userPoints++;
         break; // Exit the loop if the guess is correct
     } else if (guess > guessingNumber) {
         alert('Too high, try again.');
     } else if (guess < guessingNumber) {
         alert('Too low, try again.');
     }

//     // Check if maximum attempts have been reached
     if (attempts === maxAttempts) {
         alert('Sorry, you have used all your attempts. The correct number was ' + guessingNumber + '.');
     }
 }

// // Array of valid activities
 let activities = ['sleeping', 'baking', 'cooking', 'watching TV'];

// // Prompt the user for their answer
 let answer = prompt('What is Daniel\'s favorite activity?').toLowerCase();
 console.log(answer);

// // Check if the answer is one of the correct activities
 if (activities.includes(answer)) {
   
   alert('Correct! That is one of Daniel\'s favorite activities.');
   userPoints++;
 } else {
    alert('Incorrect. Please choose one of the following: sleeping, baking, cooking, watching TV.');
 }

// // Display all valid activities 
 console.log('Daniel\'s favorite activities are:');
 for (let i = 0; i < activities.length; i++) {
     console.log(activities[i]);
 }

 alert ('you have ' + userPoints + ' points.');