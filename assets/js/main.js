
var buttonColours  =  ["red", "blue", "green", "yellow"]; // errei pois coloquei dentro da função

var gamePattern = []; //errei pois coloquei dentro da função



function nextSequence() {
  
  var randomNumber = Math.floor(Math.random() * 4 ) +1; //acertei
  var randomChosenColour = buttonColours[randomNumber]; // tinha  que abri como uma variavel
  gamePattern.push(randomChosenColour); //não soube chamar esse arquivo aqui

  // randomChosenColour = buttonColours + randomNumber; o meu coloquei como mais mas a inteção foi certa
  
  



  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);// acertie 50% era só add

  //$("#").animate({ backgroundColor: "#FFFFFF"}, 1500); eu tinha acetado do outro jeito
  
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();


  
 
}


nextSequence();

//errei totalmente
/*function makeSound(key) { 
  
  switch (key) {
    case "red":
      var soundRed = new Audio('assets/sounds/red.mp3')
      soundRed.play;
      break;
  
     case "blue":
     var soundBlue = new Audio('assets/sounds/blue.mp3')
     soundBlue.play;
     break;


    case "green":
    var soundGreen = new Audio('assets/sounds/green.mp3')
    soundGreen.play;
    break; 


    case "yellow":
    var soundYellow = new Audio('assets/sounds/yellow.mp3')
    soundYellow.play;
    break; 


    default: console.log(key);
     
  }


}*/
