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

