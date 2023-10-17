
var buttonColours  =  ["red", "blue", "green", "yellow"]; 

var gamePattern = []; 
var userClickedPattern = [];
var started = false; //falto criar essa var, mas fiquei confuso se era dentro ou fora 
var level = 0; // criei ela dentro da função

//não consegui interpretar essa função
$(document).keypress(function(){

  if (!started) {
    
    $("#level-title").text("Level" + level);
    nextSequence();
    started = true;
  }
})


$(".btn").click(function () {
  
  var userChosenColour =  $(this).attr("id"); 

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour); 
}); 
     
 

function nextSequence() {


  level++; //não consegui interpretar esse problema aqui

  //não consegui interpretar esse problema aqui
  $("#level-title").text("Level" + level);


  var randomNumber = Math.floor(Math.random() * 4 ) +1; 
  var randomChosenColour = buttonColours[randomNumber]; 
  gamePattern.push(randomChosenColour); 

 
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);/
  playSound(randomChosenColour);/



}

function playSound(name) { 

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  
       
  }


}

function animatePress(currentColour) {
  
 $('#' + currentColour).addClass("pressed");  

 setTimeout(function () {
  $('#' + currentColour).removeClass("pressed");
 }, 100)
}