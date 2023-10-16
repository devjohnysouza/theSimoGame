
var buttonColours  =  ["red", "blue", "green", "yellow"]; // errei pois coloquei dentro da função

var gamePattern = []; //errei pois coloquei dentro da função



function nextSequence() {
  
  var randomNumber = Math.floor(Math.random() * 4 ) +1; //acertei

  // randomChosenColour = buttonColours + randomNumber; o meu coloquei como mais mas a inteção foi certa
  
  
  var randomChosenColour = buttonColours[randomNumber]; // tinha  que abri como uma variavel


  gamePattern.push(randomChosenColour);
 

}


