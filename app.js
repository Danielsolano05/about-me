'use strict';
function yourName () {

  let name = prompt('what is your name?');
  return name; 
}
let userResponse = confirm('Do you want to proceed?');
if (userResponse) {
    console.log('User selected Yes.');
} else {
    console.log('User selected No.');
}
let userChoose =confirm('was I born in 2005')
if (userChoose) {
    console.log('user chose yes.');
}else {
  console.log('user chose no.');
}
let pasion = prompt ('what is one of my pasions' );
{
  switch (pasion.toLowerCase()) {
     case 'baking':
      console.log('my favorit pasion is baking');
      break;
      case 'cooking':
        console.log('my favorit pasiom is cooking');
        break
        default:
          console.log('you don\'t know what my favorit pasion is');
  }
}