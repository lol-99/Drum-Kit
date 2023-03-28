// alert("Hello!");

//Detecting Button presses
var noOfDrumButtons = document.querySelectorAll("button.drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    //function gets called only if the evenOccurred == typeOfEvent
    //inside this function not only we want to make sound but also add animation
    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });
}


//Detecting key presses
document.addEventListener("keydown",function(event){

  makesound(event.key);

  buttonAnimation(event.key);

});


function makesound(key){

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); //100ms is written arbitarity according to your requirement

}
