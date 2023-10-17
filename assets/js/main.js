
var buttonColours  =  ["red", "blue", "green", "yellow"]; // errei pois coloquei dentro da função


var gamePattern = []; //errei pois coloquei dentro da função
var userClickedPattern = [];



  // eu fiz dentro da função nextSquence sendo que era para fazer fora   
$(".btn").click(function () {
  
  var userChosenColour =  $(this).attr("id"); //acertei, bas

  userClickedPattern.push(userChosenColour);//falto esse aqui que eu não consegui fazer


  
  playSound(userChosenColour); //acertei em termos falto coloar a variavel aqui dentro
}) 
     
 
function nextSequence() {
  



  var randomNumber = Math.floor(Math.random() * 4 ) +1; //acertei
  var randomChosenColour = buttonColours[randomNumber]; // tinha  que abri como uma variavel
  gamePattern.push(randomChosenColour); //não soube chamar esse arquivo aqui

  // randomChosenColour = buttonColours + randomNumber; o meu coloquei como mais mas a inteção foi certa
  
 



  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);// acertie 50% era só add

  //$("#").animate({ backgroundColor: "#FFFFFF"}, 1500); eu tinha acetado do outro jeito
  
 

  playSound(randomChosenColour);//acertei em termos falto coloar a variavel aqui dentro
   
 
}


nextSequence();

function playSound(name) { 

  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
  
       
  }


}
