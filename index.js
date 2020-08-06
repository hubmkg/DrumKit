
//how many drums in array?
var numberOfDrumButtons = document.querySelectorAll('.drum').length;

// detect which button was pressed by the mouse
// call anonymous function that calls a named function
// pass the character found in the html code associated with the button
for (i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    playDrumKit(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// detect which key on the keyboard was pressed, inspect entire document
// call anonymous function that passes keyboard event that calls a named function passing which key was pressed
document.addEventListener("keydown", function(event) {
  playDrumKit(event.key);
  buttonAnimation(event.key);
});

// on mouseover/mouseout: add/remove css class for box shadow  mkg
$("button").on("mouseover",function(){
  $(this).addClass("touched");
 });
//
$("button").on("mouseout",function(){
 $(this).removeClass("touched");
});

// play a sound based on which button or key was pressed
// convert all characters to toLowerCase
function playDrumKit(buttonORkeyboard) {
  switch (buttonORkeyboard.toLowerCase()) {
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
    case "h j": // this case occurs when the mouse presses the snare button mkg
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

// the snare has classes "h" and "j", we only need one class for querySelector
// use slice to capture first character of the class
// this code works for either 1 or 2 characters passed to the function
// convert all characters to lower case
// then locate pointer to active button class
// add class "selected"
// wait 250 milliseconds then remove it: this causes button to stop shaking  mkg
function buttonAnimation(currentKey){
   var currentKey = (currentKey.slice(0,1)).toLowerCase();
   var activeButton = document.querySelector("." + currentKey);
   activeButton.classList.add("pressed");
   setTimeout(function() {activeButton.classList.remove("pressed");},250);
}

// add css class .pressed to current button and animate a flash with 250ms delay
function animateTouch(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 250);
}
