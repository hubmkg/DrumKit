
// javascript code developed by mkg

//how many drums in array?
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

// detect which button was pressed by the mouse
// call anonymous function that calls a named function
// pass the character found in the html code associated with the button
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    playDrumKit(this.innerHTML);
  });
}

// detect which key on the keyboard was pressed, apply to entire document
// call anonymous function that passes keyboard event that calls a named function passing which key was pressed
document.addEventListener("keydown", function(event) {
  playDrumKit(event.key);
});

// play a sound based on which button or key was pressed
function playDrumKit(buttonORkeyboard) {
  switch (buttonORkeyboard) {
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "f":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "h":
    case "j":
    case "h j": // this case occurs when the mouse presses the snare button
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonORkeyboard);
  }
}
